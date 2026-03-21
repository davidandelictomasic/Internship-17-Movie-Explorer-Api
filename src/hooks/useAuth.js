import { useState, useEffect } from 'react'

function useAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      setUser(payload)
    } catch {
      setUser(null)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const isAdmin = user?.role === 'ADMIN'
  const isLoggedIn = !!user

  return { user, isAdmin, isLoggedIn, logout }
}

export default useAuth
