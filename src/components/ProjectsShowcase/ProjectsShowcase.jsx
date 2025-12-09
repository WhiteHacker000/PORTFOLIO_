import { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsShowcase.module.css'

export default function ProjectsShowcase({ showOnlyFeatured = false }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(!showOnlyFeatured)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubLink: '',
    hostedLink: '',
    tags: '',
    isFeatured: false
  })

  useEffect(() => {
    // Load projects from localStorage or use demo projects
    const savedProjects = localStorage.getItem('portfolioProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      const demoProjects = [
        {
          _id: "1",
          title: "E-Commerce Platform",
          description:
            "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
          imageUrl: "/ecommerce-dashboard-modern.jpg",
          tags: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
          githubLink: "#",
          hostedLink: "#",
          isFeatured: true
        },
        {
          _id: "2",
          title: "AI Task Manager",
          description: "Intelligent task management app powered by AI for smart scheduling and prioritization.",
          imageUrl: "/task-management-app.png",
          tags: ["React", "AI SDK", "Node.js", "PostgreSQL"],
          githubLink: "#",
          hostedLink: "#",
          isFeatured: true
        },
        {
          _id: "3",
          title: "Design System",
          description: "Comprehensive design system with 50+ reusable components and complete documentation.",
          imageUrl: "/design-system-library.png",
          tags: ["React", "CSS", "Storybook", "TypeScript"],
          githubLink: "#",
          hostedLink: "#",
          isFeatured: false
        },
      ]
      setProjects(demoProjects)
      localStorage.setItem('portfolioProjects', JSON.stringify(demoProjects))
    }
    setLoading(false)
  }, [])

  const saveProjects = (updatedProjects) => {
    setProjects(updatedProjects)
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects))
  }

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter((p) => p._id !== projectId)
    saveProjects(updatedProjects)
  }

  const handleToggleFeatured = (projectId) => {
    const updatedProjects = projects.map(p => 
      p._id === projectId ? { ...p, isFeatured: !p.isFeatured } : p
    )
    saveProjects(updatedProjects)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newProject = {
      _id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl || '/placeholder.jpg',
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      githubLink: formData.githubLink,
      hostedLink: formData.hostedLink,
      isFeatured: formData.isFeatured
    }

    const updatedProjects = [...projects, newProject]
    saveProjects(updatedProjects)
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      githubLink: '',
      hostedLink: '',
      tags: '',
      isFeatured: false
    })
    setShowModal(false)
  }

  const featuredProjects = projects.filter(p => p.isFeatured)
  const otherProjects = projects.filter(p => !p.isFeatured)

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
          <div>
            <h2 className={styles.title}>
              {showOnlyFeatured ? 'Featured' : 'All'} <span className={`${styles.accent} neon-glow`}>Projects</span>
            </h2>
            <p className={styles.subtitle}>
              {showOnlyFeatured 
                ? 'A curated selection of my recent work, showcasing expertise in modern web development.'
                : 'Complete portfolio of my projects and contributions.'}
            </p>
          </div>
          <div className={styles.headerActions}>
            {showOnlyFeatured && otherProjects.length > 0 && (
              <a href="#projects-all" className={styles.viewAllButton}>
                View All Projects
                <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}
            <button onClick={() => setShowModal(true)} className={styles.addButton}>
              <span className={styles.addIcon}>+</span>
              Add Project
            </button>
          </div>
        </div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className={styles.grid}>
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project._id} 
                project={project} 
                onDelete={handleDeleteProject}
                onToggleFeatured={handleToggleFeatured}
              />
            ))}
          </div>
        )}

        {/* Show "View All" button if on home page and there are other projects */}
        {showOnlyFeatured && otherProjects.length > 0 && (
          <div className={styles.viewAllContainer}>
            <a href="#projects-all" className={styles.viewAllButtonLarge}>
              View All {projects.length} Projects
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}

        {/* Other Projects Section - Only show if not on home page */}
        {!showOnlyFeatured && otherProjects.length > 0 && (
          <>
            <h3 className={styles.otherTitle}>Other Projects</h3>
            <div className={styles.grid}>
              {otherProjects.map((project) => (
                <ProjectCard 
                  key={project._id} 
                  project={project} 
                  onDelete={handleDeleteProject}
                  onToggleFeatured={handleToggleFeatured}
                />
              ))}
            </div>
          </>
        )}

        {/* Add Project Modal */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Add New Project</h3>
                <button onClick={() => setShowModal(false)} className={styles.closeButton}>×</button>
              </div>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="My Awesome Project"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                    rows="3"
                    placeholder="Brief description of your project..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>GitHub Link *</label>
                  <input
                    type="url"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="https://github.com/username/repo"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Hosted Link *</label>
                  <input
                    type="url"
                    name="hostedLink"
                    value={formData.hostedLink}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="https://your-project.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Image URL (optional)</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Technologies (comma separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={formData.isFeatured}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    Mark as Featured Project
                  </label>
                </div>

                <div className={styles.formActions}>
                  <button type="button" onClick={() => setShowModal(false)} className={styles.cancelButton}>
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
