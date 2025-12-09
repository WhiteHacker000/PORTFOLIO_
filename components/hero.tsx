"use client"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-primary neon-glow">Creative</span>
          <span className="block mt-2">
            <span className="text-accent neon-glow">Developer</span>
            {" & "}
            <span className="text-primary neon-glow">Designer</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, modern digital experiences with cutting-edge technology. Specializing in full-stack
          development and minimalist design principles.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 neon-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
