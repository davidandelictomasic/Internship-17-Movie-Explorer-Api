import { useParams, useNavigate } from 'react-router-dom'
import movies from '../data/movies'
import '../styles/MovieDetail.css'

function MovieDetail({ favorites, toggleFavorite }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((m) => m.id === Number(id))
  const isFavorite = movie && favorites.includes(movie.id)

  return (
    <div>
      {movie ? (
        <div className="movie-detail">
          <img src={movie.poster} alt={movie.title} className="detail-poster" />
          <div className="detail-info">
            <h1>{movie.title}</h1>
            <p className="detail-meta">{movie.year} · {movie.genre} · {movie.rating}/10</p>
            <p className="detail-description">{movie.description}</p>
            <button onClick={() => toggleFavorite(movie.id)}>
              {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Movie not found</h1>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      )}
    </div>
  )
}

export default MovieDetail
