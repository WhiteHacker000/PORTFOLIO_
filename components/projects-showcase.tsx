"use client"

import { useEffect, useState } from "react"
import ProjectCard from "./project-card"
import AddProjectModal from "./add-project-modal"

interface Project {
  _id: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  link: string
}

export default function ProjectsShowcase() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Fetch projects from MongoDB
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching projects:", err)
        setLoading(false)
      })
  }, [])

  // Demo projects while backend is being set up
  const demoProjects: Project[] = [
    {
      _id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      imageUrl: "/ecommerce-dashboard-modern.jpg",
      tags: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
      link: "#",
    },
    {
      _id: "2",
      title: "AI Task Manager",
      description: "Intelligent task management app powered by AI for smart scheduling and prioritization.",
      imageUrl: "/task-management-app.png",
      tags: ["React", "AI SDK", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      _id: "3",
      title: "Design System",
      description: "Comprehensive design system with 50+ reusable components and complete documentation.",
      imageUrl: "/design-system-library.png",
      tags: ["React", "Tailwind", "Storybook", "TypeScript"],
      link: "#",
    },
  ]

  const handleDeleteProject = async (projectId: string) => {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setProjects(projects.filter((p) => p._id !== projectId))
      }
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  const handleAddProject = async (newProject: Omit<Project, "_id">) => {
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
      if (response.ok) {
        const addedProject = await response.json()
        setProjects([...projects, addedProject])
        setIsModalOpen(false)
      }
    } catch (error) {
      console.error("Error adding project:", error)
    }
  }

  const displayProjects = projects.length > 0 ? projects : demoProjects

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex justify-between items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary neon-glow">Projects</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              A selection of my recent work showcasing my skills in full-stack development.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-primary text-card font-semibold rounded-lg hover:bg-primary/90 transition-colors neon-glow whitespace-nowrap"
          >
            + Add Project
          </button>
        </div>

        <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddProject} />

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-foreground/50">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
              <ProjectCard key={project._id} project={project} onDelete={handleDeleteProject} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
