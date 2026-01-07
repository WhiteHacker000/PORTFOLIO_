import { useAuth } from '../../contexts/AuthContext'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, onDelete, onToggleFeatured, onEdit }) {
  const { isAdmin } = useAuth()

  return (
    <div className={styles.card}>
      {/* Featured Badge */}
      {project.isFeatured && (
        <div className={styles.featuredBadge}>
          <svg className={styles.starIcon} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </div>
      )}

      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className={styles.image}
        />
      </div>

      {/* Action Buttons */}
      {isAdmin && (
        <div className={styles.actionButtons}>
          {onEdit && (
            <button
              onClick={() => onEdit(project)}
              className={`${styles.actionButton} ${styles.editButton}`}
              title="Edit project"
            >
              <svg className={styles.actionIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          )}
          {onToggleFeatured && (
            <button
              onClick={() => onToggleFeatured(project._id)}
              className={`${styles.actionButton} ${styles.featuredButton}`}
              title={project.isFeatured ? "Remove from featured" : "Mark as featured"}
            >
              <svg className={styles.actionIcon} fill={project.isFeatured ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={project.isFeatured ? 0 : 2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete this project?")) {
                  onDelete(project._id)
                }
              }}
              className={`${styles.actionButton} ${styles.deleteButton}`}
              title="Delete project"
            >
              <svg className={styles.actionIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.description}>{project.description}</p>

        {/* Tags */}
        <div className={styles.tags}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={styles.links}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg className={styles.linkIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.hostedLink && (
            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg className={styles.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
