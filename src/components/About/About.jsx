import styles from './About.module.css'

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "CSS"] },
    { category: "Backend", items: ["Node.js", "MongoDB", "MySQL", "SQLite", "REST APIs"] },
    { category: "Tools", items: ["Git", "Render", "Vercel", "Netlify", "AWS"] },
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            About <span className={`${styles.accent} neon-glow`}>Me</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Bio */}
          <div>
            <p className={styles.bio}>
              I'm a passionate full-stack developer with a keen eye for design. I've worked with startups and enterprises to build scalable, user-focused applications.
            </p>
            <p className={styles.bio}>
              My approach combines clean code, modern technologies, and minimalist design principles to create digital
              experiences that users love.
            </p>
          </div>

          {/* Skills */}
          <div className={styles.skillsSection}>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                <div className={styles.skillTags}>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
