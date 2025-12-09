import { useState, useEffect } from 'react'
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
    <main className={styles.main}>
      <Navigation />
      <Hero />
      <ProjectsShowcase />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
