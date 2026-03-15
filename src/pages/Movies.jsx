import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchGenres from '../hooks/useFetchGenres'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Movies({ isFavorite }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [delayedSearch, setDebouncedSearch] = useState(searchParams.get('search') || '')
  const searchRef = useRef(null)
  const setTimeoutSearch = useRef(null)

  const sort = searchParams.get('sort') || ''
  const order = searchParams.get('order') || ''
  const genre = searchParams.get('genre') || ''

  const { movies, loading, error } = useFetchMovies(delayedSearch, sort, genre, order)
  const { genres } = useFetchGenres()

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    setSearchParams(params)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    clearTimeout(setTimeoutSearch.current)
    setTimeoutSearch.current = setTimeout(() => {
      setDebouncedSearch(e.target.value)
      updateParams('search', e.target.value)
    }, 300)
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="controls">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={handleSearch}
        />
        <select value={genre} onChange={(e) => updateParams('genre', e.target.value)}>
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => updateParams('sort', e.target.value)}>
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="release_date">Release Date</option>
          <option value="rating">Rating</option>
        </select>
        <select value={order} onChange={(e) => updateParams('order', e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p>No movies found.</p>
      )}
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavorite={isFavorite(movie.id)} />
        ))}
      </div>
    </div>
  )
}

export default Movies
