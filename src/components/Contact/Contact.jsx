import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Get In <span className={`${styles.primary} neon-glow`}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className={styles.input} placeholder="Your name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={styles.input} placeholder="your@email.com" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={styles.textarea} placeholder="Tell me about your project..." />
          </div>

          <button type="submit" disabled={loading} className={`${styles.button} ${loading ? styles.buttonDisabled : ''} neon-glow`}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <div className={styles.successMessage}>
              <svg className={styles.successIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
