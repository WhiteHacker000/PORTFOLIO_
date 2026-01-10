import { createContext, useContext, useState, useEffect } from 'react'

const ProjectContext = createContext()

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      setProjects([])
    }
    setLoading(false)
  }, [])

  const saveToLocalStorage = (updatedProjects) => {
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
  }

  const addProject = (newProject) => {
    const updated = [...projects, newProject]
    setProjects(updated)
    saveToLocalStorage(updated)
  }

  const updateProject = (projectId, updatedData) => {
    const updated = projects.map(p =>
      p._id === projectId ? { ...p, ...updatedData } : p
    )
    setProjects(updated)
    saveToLocalStorage(updated)
  }

  const deleteProject = (projectId) => {
    const updated = projects.filter(p => p._id !== projectId)
    setProjects(updated)
    saveToLocalStorage(updated)
  }

  const toggleFeatured = (projectId) => {
    const updated = projects.map(p =>
      p._id === projectId ? { ...p, isFeatured: !p.isFeatured } : p
    )
    setProjects(updated)
    saveToLocalStorage(updated)
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
