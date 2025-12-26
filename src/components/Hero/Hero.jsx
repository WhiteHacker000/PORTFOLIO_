import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Left Side - Text Content */}
          <div className={styles.textContent}>
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
              Full-Stack Developer with a strong problem-solving mindset, 80+ day LeetCode streak, and 100+ problems solved on CodeChef & 200+ on LeetCode. Currently learning JavaScript,Backend and building scalable web apps.
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
          </div>

          {/* Right Side - Photo */}
          <div className={styles.photoContainer}>
            <div className={styles.photoFrame}>
              <img 
                src="/Me.jpeg" 
                alt="Profile Photo" 
                className={styles.photo}
              />
              <div className={styles.photoGlow}></div>
            </div>
          </div>
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
