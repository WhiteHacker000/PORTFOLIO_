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
      const demoProjects = [
        {
          _id: "1",
          title: "E-Commerce Platform",
          description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
          imageUrl: "/ecommerce-dashboard-modern.jpg",
          tags: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
          githubLink: "https://github.com",
          hostedLink: "https://demo.com",
          isFeatured: true
        },
        {
          _id: "2",
          title: "AI Task Manager",
          description: "Intelligent task management app powered by AI for smart scheduling and prioritization.",
          imageUrl: "/task-management-app.png",
          tags: ["React", "AI SDK", "Node.js", "PostgreSQL"],
          githubLink: "https://github.com",
          hostedLink: "https://demo.com",
          isFeatured: true
        },
        {
          _id: "3",
          title: "Design System",
          description: "Comprehensive design system with 50+ reusable components and complete documentation.",
          imageUrl: "/design-system-library.png",
          tags: ["React", "CSS", "Storybook", "TypeScript"],
          githubLink: "https://github.com",
          hostedLink: "https://demo.com",
          isFeatured: false
        },
      ]
      setProjects(demoProjects)
      localStorage.setItem('portfolioProjects', JSON.stringify(demoProjects))
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
