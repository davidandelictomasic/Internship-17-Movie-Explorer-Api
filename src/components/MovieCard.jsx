import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({ movie, isFavorite }) {
  return (
    <Link to={`/movies/${movie.id}`} className={`card ${isFavorite ? 'favorite' : ''}`}>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="poster"
      />
      <div>
        <h3 className="title">{movie.title}</h3>
        <p className="year">{movie.year}</p>
      </div>
    </Link>
  )
}

export default MovieCard
