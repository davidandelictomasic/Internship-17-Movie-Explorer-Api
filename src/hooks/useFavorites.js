import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000'

function useFavorites() {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFavorites = () => {
    fetch(`${API_URL}/favorites`)
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
      fetch(`${API_URL}/favorites/${existing.id}`, { method: 'DELETE' })
        .then(() => fetchFavorites())
    } else {
      fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieId }),
      }).then(() => fetchFavorites())
    }
  }

  const isFavorite = (movieId) => favorites.some((f) => f.movieId === movieId)

  return { favorites, loading, toggleFavorite, isFavorite }
}

export default useFavorites
