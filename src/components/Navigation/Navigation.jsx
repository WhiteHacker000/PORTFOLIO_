import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects-all" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoText}>
              <span className={styles.logoP}>P</span>
              <span className={styles.logoF}>F</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuButton}>
            <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className={styles.mobileNav}>
              <div className={styles.mobileNavContent}>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
