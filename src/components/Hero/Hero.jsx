import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Main Title */}
        <h1 className={styles.title}>
          <span className={`${styles.primaryText} neon-glow`}>Creative</span>
          <span className={styles.titleBlock}>
            <span className={`${styles.accentText} neon-glow`}>Developer</span>
            {" & "}
            <span className={`${styles.primaryText} neon-glow`}>Designer</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          I craft beautiful, modern digital experiences with cutting-edge technology. Specializing in full-stack
          development and minimalist design principles.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <a
            href="#projects"
            className={`${styles.primaryButton} neon-glow`}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={styles.secondaryButton}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} animate-bounce`}>
          <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
