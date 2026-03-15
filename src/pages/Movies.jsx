import { useState, useRef, useEffect } from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchGenres from '../hooks/useFetchGenres'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Movies({ isFavorite }) {
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')
  const [genre, setGenre] = useState('')
  const [search, setSearch] = useState('')
  const [delayedSearch, setDebouncedSearch] = useState('')
  const searchRef = useRef(null)
  const setTimeoutSearch = useRef(null)

  const { movies, loading, error } = useFetchMovies(delayedSearch, sort, genre, order)
  const { genres } = useFetchGenres()

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    clearTimeout(setTimeoutSearch.current)
    setTimeoutSearch.current = setTimeout(() => {
      setDebouncedSearch(e.target.value)
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
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="release_date">Release Date</option>
          <option value="rating">Rating</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
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
