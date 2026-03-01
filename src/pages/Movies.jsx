import { Link } from 'react-router-dom'
import useFetchMovies from '../hooks/useFetchMovies'

function Movies() {
  const { movies, loading, error } = useFetchMovies()

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p>No movies found.</p>
      )}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title} ({movie.year}) — {movie.rating}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
