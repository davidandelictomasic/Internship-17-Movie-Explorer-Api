import { useState, useRef, useEffect } from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MovieCard from '../components/MovieCard'
import '../styles/Movies.css'

function Movies() {
  const { movies, loading, error } = useFetchMovies()
  const [filter,setFilter] = useState('')
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )
  if(filter){
    filteredMovies.sort((a,b)=>{
      if(filter === 'title'){
        return a.title.localeCompare(b.title)
      } else if(filter === 'release_date'){
        return b.year - a.year
      } else if(filter === 'rating'){
        return b.rating - a.rating  
      }
    })
  }
  return (
    <div>
      <h1>Movies</h1>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label htmlFor="select">Sort by</label>
      <select name='select' value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value=""></option>
        <option value="title">Title</option>
        <option value="release_date">Release Date</option>
        <option value="rating">Rating</option>
      </select>
      <p>Current filter {filter}</p>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && filteredMovies.length === 0 && (
        <p>No movies found.</p>
      )}
      <div className="grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies
