import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 && (
        <p>No favorites yet.</p>
      )}
      <div className="grid">
        {favorites.map((fav) => (
          <div key={fav.id}>
            <MovieCard movie={fav.movie} />
            <button onClick={() => toggleFavorite(fav.movieId)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
