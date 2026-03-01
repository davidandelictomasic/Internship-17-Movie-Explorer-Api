import { useState, useEffect } from 'react'
import moviesData from '../data/movies'

function useFetchMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        setMovies(moviesData)
        setLoading(false)
      } catch (err) {
        setError("Something went wrong, try again later.")
        setLoading(false)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [])

  return { movies, loading, error }
}

export default useFetchMovies
