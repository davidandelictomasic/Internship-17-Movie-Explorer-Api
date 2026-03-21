import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000'

function useFavorites() {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  const getHeaders = () => {
    const token = localStorage.getItem('token')
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    }
  }

  const fetchFavorites = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setFavorites([])
      setLoading(false)
      return
    }
    fetch(`${API_URL}/favorites`, { headers: getHeaders() })
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  const toggleFavorite = (movieId) => {
    const existing = favorites.find((f) => f.movieId === movieId)
    if (existing) {
      fetch(`${API_URL}/favorites/${existing.id}`, { method: 'DELETE', headers: getHeaders() })
        .then(() => fetchFavorites())
    } else {
      fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ movieId }),
      }).then(() => fetchFavorites())
    }
  }

  const isFavorite = (movieId) => favorites.some((f) => f.movieId === movieId)

  return { favorites, loading, toggleFavorite, isFavorite }
}

export default useFavorites
