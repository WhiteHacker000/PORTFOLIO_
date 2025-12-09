export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "CSS"] },
    { category: "Backend", items: ["Node.js", "MongoDB", "MySQL", "SQLite" , "REST APIs"] },
    { category: "Tools", items: ["Git", "Render", "Vercel", "Netlify" , "AWS"] },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent neon-glow">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer with a keen eye for design. With over 5+ years of experience, I've
              worked with startups and enterprises to build scalable, user-focused applications.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              My approach combines clean code, modern technologies, and minimalist design principles to create digital
              experiences that users love.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-primary font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-lg text-sm"
                    >
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
