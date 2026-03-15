import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000'

function useFetchGenres() {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/genres`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch genres')
        return res.json()
      })
      .then((data) => {
        setGenres(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { genres, loading, error }
}

export default useFetchGenres
