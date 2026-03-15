import { useParams, useNavigate } from 'react-router-dom'
import useFetchMovie from '../hooks/useFetchMovie'
import '../styles/MovieDetail.css'

function MovieDetail({ favorites, toggleFavorite }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movie, loading } = useFetchMovie(id)
  const isFavorite = movie && favorites.includes(movie.id)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      {movie ? (
        <div className="movie-detail">
          <img src={movie.posterUrl} alt={movie.title} className="detail-poster" />
          <div className="detail-info">
            <h1>{movie.title}</h1>
            <p className="detail-meta">
              {movie.year} · {movie.genres ? movie.genres.map((g) => g.name).join(', ') : ''} · {movie.rating}/10
            </p>
            <p className="detail-description">{movie.plot}</p>
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
