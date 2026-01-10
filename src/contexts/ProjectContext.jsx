import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

const ProjectContext = createContext()

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)

      // 1. Try fetching from Supabase
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error && data) {
          console.log('📦 Projects fetched from Supabase:', data.length)
          setProjects(data)
          localStorage.setItem('portfolioProjects', JSON.stringify(data))
          setLoading(false)
          return
        }

        if (error) console.warn('Supabase fetch error:', error.message)
      } catch (err) {
        console.error('Failed to fetch from Supabase:', err)
      }

      // 2. Fallback to localStorage
      console.log('🔄 Falling back to localStorage')
      const savedProjects = localStorage.getItem('portfolioProjects')
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects))
      } else {
        setProjects([])
      }
      setLoading(false)
    }

    fetchProjects()
  }, [])

  const saveToLocalStorage = (updatedProjects) => {
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
  }

  const addProject = async (newProject) => {
    // Optimistic UI update
    const updated = [...projects, newProject]
    setProjects(updated)
    saveToLocalStorage(updated)

    // Sync to Supabase
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([{
          title: newProject.title,
          description: newProject.description,
          image_url: newProject.imageUrl,
          github_link: newProject.githubLink,
          hosted_link: newProject.hostedLink,
          tags: newProject.tags,
          is_featured: newProject.isFeatured
        }])
        .select()

      if (error) throw error

      // Update with the actual data from Supabase (including its ID)
      if (data && data[0]) {
        setProjects(prev => prev.map(p => p._id === newProject._id ? { ...data[0], _id: data[0].id } : p))
      }
    } catch (err) {
      console.error('Failed to add project to Supabase:', err.message)
    }
  }

  const updateProject = async (projectId, updatedData) => {
    // Optimistic UI update
    const updated = projects.map(p =>
      (p._id === projectId || p.id === projectId) ? { ...p, ...updatedData } : p
    )
    setProjects(updated)
    saveToLocalStorage(updated)

    // Sync to Supabase
    try {
      const { error } = await supabase
        .from('projects')
        .update({
          title: updatedData.title,
          description: updatedData.description,
          image_url: updatedData.imageUrl,
          github_link: updatedData.githubLink,
          hosted_link: updatedData.hostedLink,
          tags: updatedData.tags,
          is_featured: updatedData.isFeatured
        })
        .match({ id: projectId }) // Supabase uses 'id'

      if (error) {
        // Handle case where projectId is the temporary _id
        const { error: error2 } = await supabase
          .from('projects')
          .update(updatedData)
          .match({ id: projects.find(p => p._id === projectId)?.id })
        if (error2) throw error2
      }
    } catch (err) {
      console.error('Failed to update project in Supabase:', err.message)
    }
  }

  const deleteProject = async (projectId) => {
    // Optimistic UI update
    const updated = projects.filter(p => p._id !== projectId && p.id !== projectId)
    setProjects(updated)
    saveToLocalStorage(updated)

    // Sync to Supabase
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .match({ id: projectId })

      if (error) throw error
    } catch (err) {
      console.error('Failed to delete project from Supabase:', err.message)
    }
  }

  const toggleFeatured = async (projectId) => {
    const project = projects.find(p => p._id === projectId || p.id === projectId)
    if (!project) return

    const newFeaturedStatus = !project.isFeatured

    // Optimistic UI update
    const updated = projects.map(p =>
      (p._id === projectId || p.id === projectId) ? { ...p, isFeatured: newFeaturedStatus } : p
    )
    setProjects(updated)
    saveToLocalStorage(updated)

    // Sync to Supabase
    try {
      const { error } = await supabase
        .from('projects')
        .update({ is_featured: newFeaturedStatus })
        .match({ id: projectId })

      if (error) throw error
    } catch (err) {
      console.error('Failed to toggle featured in Supabase:', err.message)
    }
  }

  return (
    <ProjectContext.Provider value={{
      projects,
      loading,
      addProject,
      updateProject,
      deleteProject,
      toggleFeatured
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider')
  }
  return context
}
