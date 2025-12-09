import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// Set your admin password here (in production, use environment variables)
const ADMIN_PASSWORD = 'admin123' // Change this to your preferred password

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAdminAuth')
    console.log('🔐 Checking stored auth:', storedAuth)
    if (storedAuth === 'true') {
      setIsAdmin(true)
      console.log('✅ Admin logged in from localStorage')
    } else {
      console.log('👤 User mode (not logged in)')
    }
    setIsLoading(false)
  }, [])

  // Persist admin state to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      if (isAdmin) {
        localStorage.setItem('isAdminAuth', 'true')
        console.log('💾 Admin state saved to localStorage')
      } else {
        localStorage.removeItem('isAdminAuth')
        console.log('🗑️ Admin state removed from localStorage')
      }
    }
  }, [isAdmin, isLoading])

  const login = (password) => {
    console.log('🔑 Login attempt...')
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      console.log('✅ Login successful!')
      return true
    }
    console.log('❌ Login failed - incorrect password')
    return false
  }

  const logout = () => {
    console.log('👋 Logging out...')
    setIsAdmin(false)
  }

  // Don't render children until we've checked localStorage
  if (isLoading) {
    return <div>Loading...</div>
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
