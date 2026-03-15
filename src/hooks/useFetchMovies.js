import { useState, useEffect } from 'react'

let cachedMovies = null

const API_URL = 'http://localhost:3000'

function useFetchMovies() {
  const [movies, setMovies] = useState(cachedMovies || [])
  const [loading, setLoading] = useState(!cachedMovies)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(cachedMovies) return

    fetch(`${API_URL}/movies`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch movies')
        return res.json()
      })
      .then((data) => {
        cachedMovies = data
        setMovies(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { movies, loading, error }
}

export default useFetchMovies
