import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000'

function useFetchMovie(id) {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch movie details')
        return res.json()
      })
      .then((data) => {
        setMovie(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  return { movie, loading, error }
}

export default useFetchMovie
