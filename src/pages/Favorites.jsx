import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Favorites({ favorites, toggleFavorite }) {
  const token = localStorage.getItem('token')

  if (!token) {
    return (
      <div>
        <h1>Favorites</h1>
        <p>Please <Link to="/login">login</Link> to see your favorites.</p>
      </div>
    )
  }

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
