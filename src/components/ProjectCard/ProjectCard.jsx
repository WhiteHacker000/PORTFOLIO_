import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className={styles.card}>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className={styles.image}
        />
      </div>

      {/* Delete Button */}
      {onDelete && (
        <button
          onClick={() => {
            if (confirm("Are you sure you want to delete this project?")) {
              onDelete(project._id)
            }
          }}
          className={styles.deleteButton}
          title="Delete project"
        >
          <svg className={styles.deleteIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
          </svg>
        </button>
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

        {/* Link */}
        <a href={project.link} className={styles.link}>
          View Project
          <svg
            className={styles.arrow}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}
