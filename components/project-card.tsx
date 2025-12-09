"use client"

interface ProjectCardProps {
  project: {
    _id: string
    title: string
    description: string
    imageUrl: string
    tags: string[]
    link: string
  }
  onDelete?: (projectId: string) => void
}

export default function ProjectCard({ project, onDelete }: ProjectCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
          className="absolute top-3 right-3 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          title="Delete project"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
          </svg>
        </button>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-muted text-accent text-xs rounded border border-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link}
          className="inline-flex items-center text-primary hover:text-accent transition-colors gap-2 group/link"
        >
          View Project
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
