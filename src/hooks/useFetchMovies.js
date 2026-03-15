import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000'

function useFetchMovies(search = '', sort = '', genre = '', order = '') {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const params = new URLSearchParams()
    if (search) params.append('search', search)
    if (sort) params.append('sort', sort)
    if (genre) params.append('genre', genre)
    if (order) params.append('order', order)

    fetch(`${API_URL}/movies?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch movies')
        return res.json()
      })
      .then((data) => {
        setMovies(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [search, sort, genre, order])

  return { movies, loading, error }
}

export default useFetchMovies
