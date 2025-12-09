import { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsShowcase.module.css'

export default function ProjectsShowcase() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use demo projects for now
    const demoProjects = [
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
        tags: ["React", "CSS", "Storybook", "TypeScript"],
        link: "#",
      },
    ]

    setProjects(demoProjects)
    setLoading(false)
  }, [])

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((p) => p._id !== projectId))
  }

  if (loading) {
    return (
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.loading}>Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Featured <span className={`${styles.accent} neon-glow`}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of my recent work, showcasing expertise in modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} onDelete={handleDeleteProject} />
          ))}
        </div>
      </div>
    </section>
  )
}
