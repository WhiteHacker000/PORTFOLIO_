import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// Set your admin password here (in production, use environment variables)
const ADMIN_PASSWORD = 'admin123' // Change this to your preferred password

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    // Check if already authenticated
    return localStorage.getItem('isAdminAuth') === 'true'
  })

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      localStorage.setItem('isAdminAuth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdminAuth')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
