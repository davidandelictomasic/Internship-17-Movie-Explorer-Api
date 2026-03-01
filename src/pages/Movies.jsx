import useFetchMovies from '../hooks/useFetchMovies'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

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
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
