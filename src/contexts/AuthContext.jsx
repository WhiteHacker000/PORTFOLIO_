import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// Hashed admin password using SHA-256
// Original password: "Poiuytrewq@098"
// This hash cannot be reversed - much more secure!
const ADMIN_PASSWORD_HASH = 'b7f40d87a5ecc06f2bbedd0bccf6e39c84970eda1509f208bbcb7c343bbebaf0'

// Function to hash password using SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

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

  const login = async (password) => {
    console.log('🔑 Login attempt...')
    try {
      const hashedInput = await hashPassword(password)
      console.log('🔒 Password hashed for comparison')
      
      if (hashedInput === ADMIN_PASSWORD_HASH) {
        setIsAdmin(true)
        console.log('✅ Login successful!')
        return true
      }
      console.log('❌ Login failed - incorrect password')
      return false
    } catch (error) {
      console.error('❌ Login error:', error)
      return false
    }
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
