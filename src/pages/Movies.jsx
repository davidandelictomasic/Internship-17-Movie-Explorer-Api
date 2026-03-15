import { useState, useRef, useEffect, useMemo } from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchGenres from '../hooks/useFetchGenres'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Movies({ favorites }) {
  const { movies, loading, error } = useFetchMovies()
  const { genres } = useFetchGenres()
  const [filter,setFilter] = useState('')
  const [genre, setGenre] = useState('')
  const [search, setSearch] = useState('')
  const [delayedSearch, setDebouncedSearch] = useState('')
  const searchRef = useRef(null)
  const setTimeoutSearch = useRef(null)

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

  const filteredMovies = useMemo(() => {
    const result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(delayedSearch.toLowerCase()) &&
      (!genre || movie.genre === genre)
    )
    if (filter) {
      result.sort((a, b) => {
        if (filter === 'title') {
          return a.title.localeCompare(b.title)
        } else if (filter === 'release_date') {
          return b.year - a.year
        } else if (filter === 'rating') {
          return b.rating - a.rating
        }
      })
    }
    return result
  }, [movies, delayedSearch, filter, genre])

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
        <select value={genre} onChange={(e)=>setGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="release_date">Release Date</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && filteredMovies.length === 0 && (
        <p>No movies found.</p>
      )}
      <div className="grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isFavorite={favorites.includes(movie.id)} />
        ))}
      </div>
    </div>
  )
}

export default Movies
