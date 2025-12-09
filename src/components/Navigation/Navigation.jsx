import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [password, setPassword] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { isAdmin, login, logout } = useAuth()

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects-all" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('🔐 Attempting login...')
    const success = login(password)
    if (success) {
      setShowLogin(false)
      setPassword('')
      alert('✅ Login successful! You are now in Admin mode.')
    } else {
      alert('❌ Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout from Admin mode?')) {
      logout()
      setIsOpen(false)
      alert('👋 Logged out successfully')
    }
  }

  console.log('🎯 Navigation - isAdmin:', isAdmin)

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
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className={styles.themeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className={styles.themeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Admin Login/Logout */}
            {isAdmin ? (
              <button onClick={logout} className={`${styles.adminButton} ${styles.loggedIn}`}>
                <span className={styles.adminDot}>●</span> Logout
              </button>
            ) : (
              <button onClick={() => setShowLogin(true)} className={styles.adminButton}>
                Admin
              </button>
            )}
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
                <button 
                  onClick={() => { toggleTheme(); setIsOpen(false); }} 
                  className={styles.mobileThemeToggle}
                >
                  {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
                {isAdmin ? (
                  <button onClick={handleLogout} className={styles.mobileAdminButton}>
                    Logout
                  </button>
                ) : (
                  <button onClick={() => { setShowLogin(true); setIsOpen(false); }} className={styles.mobileAdminButton}>
                    Admin Login
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className={styles.modalOverlay} onClick={() => setShowLogin(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={styles.passwordInput}
                autoFocus
              />
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.loginButton}>
                  Login
                </button>
                <button 
                  type="button" 
                  onClick={() => { setShowLogin(false); setPassword(''); }}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
}
