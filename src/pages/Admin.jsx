import { useState } from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import useFetchGenres from '../hooks/useFetchGenres'
import '../styles/Admin.css'

const emptyForm = { title: '', year: '', rating: '', plot: '', posterUrl: '', genreIds: [] }

function Admin() {
  const { movies, loading, error } = useFetchMovies()
  const { genres } = useFetchGenres()
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  const handleChange = () => {}
  const handleGenreChange = () => {}
  const handleSubmit = (e) => { e.preventDefault() }
  const handleEdit = () => {}
  const handleDelete = () => {}
  const handleCancel = () => {}

  return (
    <div>
      <div className="admin-header">
        <h1>Admin - Manage Movies</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="year" type="number" placeholder="Year" value={form.year} onChange={handleChange} required />
        <input name="rating" type="number" step="0.1" placeholder="Rating" value={form.rating} onChange={handleChange} required />
        <input name="posterUrl" placeholder="Poster URL" value={form.posterUrl} onChange={handleChange} />
        <textarea name="plot" placeholder="Plot" value={form.plot} onChange={handleChange} rows={3} />
        <select multiple value={form.genreIds.map(String)} onChange={handleGenreChange}>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
        <div className="form-buttons">
          <button type="submit">{editingId ? 'Update' : 'Create'}</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Genres</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
                <td>{movie.genres.map((g) => g.name).join(', ')}</td>
                <td>
                  <button onClick={() => handleEdit(movie)}>Edit</button>
                  <button onClick={() => handleDelete(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Admin
