import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useProjects } from '../../contexts/ProjectContext'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsShowcase.module.css'

export default function ProjectsShowcase({ showOnlyFeatured = false }) {
  const { isAdmin } = useAuth()
  const { projects, loading, addProject, updateProject, deleteProject, toggleFeatured } = useProjects()
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubLink: '',
    hostedLink: '',
    tags: '',
    isFeatured: false
  })

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      githubLink: '',
      hostedLink: '',
      tags: '',
      isFeatured: false
    })
    setEditingProject(null)
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl || '',
      githubLink: project.githubLink || '',
      hostedLink: project.hostedLink || '',
      tags: project.tags ? project.tags.join(', ') : '',
      isFeatured: project.isFeatured || false
    })
    setShowModal(true)
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

    const projectData = {
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl || '/placeholder.jpg',
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      githubLink: formData.githubLink,
      hostedLink: formData.hostedLink,
      isFeatured: formData.isFeatured
    }

    if (editingProject) {
      updateProject(editingProject._id, projectData)
    } else {
      addProject({
        ...projectData,
        _id: Date.now().toString()
      })
    }

    resetForm()
    setShowModal(false)
  }

  const displayedProjects = showOnlyFeatured
    ? projects.filter(p => p.isFeatured)
    : projects

  const hasOtherProjects = projects.some(p => !p.isFeatured)

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
            {showOnlyFeatured && hasOtherProjects && (
              <a href="#projects-all" className={styles.viewAllButton}>
                View All Projects
                <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}
            {!showOnlyFeatured && isAdmin && (
              <button
                onClick={() => {
                  resetForm()
                  setShowModal(true)
                }}
                className={styles.addButton}
              >
                <span className={styles.addIcon}>+</span>
                Add Project
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <div className={styles.grid}>
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onDelete={deleteProject}
                onToggleFeatured={toggleFeatured}
                onEdit={handleEdit}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noProjects}>
            No projects found.
          </div>
        )}

        {/* Show "View All" button if on home page and there are other projects */}
        {showOnlyFeatured && hasOtherProjects && (
          <div className={styles.viewAllContainer}>
            <a href="#projects-all" className={styles.viewAllButtonLarge}>
              View All {projects.length} Projects
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}

        {/* Add/Edit Project Modal */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={() => {
            setShowModal(false)
            resetForm()
          }}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
                <button onClick={() => {
                  setShowModal(false)
                  resetForm()
                }} className={styles.closeButton}>×</button>
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
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      resetForm()
                    }}
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    {editingProject ? 'Save Changes' : 'Add Project'}
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
