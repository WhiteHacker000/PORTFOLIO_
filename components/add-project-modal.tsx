"use client"

import type React from "react"

import { useState } from "react"

interface AddProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (project: {
    title: string
    description: string
    imageUrl: string
    tags: string[]
    link: string
  }) => void
}

export default function AddProjectModal({ isOpen, onClose, onAdd }: AddProjectModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [tags, setTags] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd({
      title,
      description,
      imageUrl,
      tags: tags.split(",").map((tag) => tag.trim()),
      link,
    })
    // Reset form
    setTitle("")
    setDescription("")
    setImageUrl("")
    setTags("")
    setLink("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-primary rounded-lg max-w-md w-full p-6 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">Add New Project</h2>
          <button onClick={onClose} className="text-foreground/60 hover:text-foreground">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary resize-none"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Image URL</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Tags (comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary"
              placeholder="React, Node.js, MongoDB"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Project Link</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary text-card font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Add Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-foreground/10 text-foreground font-semibold rounded hover:bg-foreground/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
