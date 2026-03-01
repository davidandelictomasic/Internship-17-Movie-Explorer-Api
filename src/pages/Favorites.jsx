import movies from '../data/movies'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Favorites({ favorites, toggleFavorite }) {
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id))

  return (
    <div>
      <h1>Favorites</h1>
      {favoriteMovies.length === 0 && (
        <p>No favorites yet.</p>
      )}
      <div className="grid">
        {favoriteMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
            <button onClick={() => toggleFavorite(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
