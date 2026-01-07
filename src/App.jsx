import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectProvider } from './contexts/ProjectContext'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import ProjectsShowcase from './components/ProjectsShowcase/ProjectsShowcase'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider>
      <AuthProvider>
        <ProjectProvider>
          <main className={styles.main}>
            <Navigation />
            <Hero />
            <About />
            <ProjectsShowcase showOnlyFeatured={true} />
            {/* All Projects Section - shown when clicking "Projects" in nav */}
            <section id="projects-all" className={styles.allProjectsSection}>
              <ProjectsShowcase showOnlyFeatured={false} />
            </section>
            <Contact />
            <Footer />
          </main>
        </ProjectProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
