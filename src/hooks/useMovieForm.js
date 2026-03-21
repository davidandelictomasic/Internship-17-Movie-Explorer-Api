import { useState } from 'react'

const API_URL = 'http://localhost:3000'
const emptyForm = { title: '', year: '', rating: '', plot: '', posterUrl: '', genreIds: [] }

const getHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  }
}

function useMovieForm() {
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleGenreChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (o) => Number(o.value))
    setForm({ ...form, genreIds: selected })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      ...form,
      year: Number(form.year),
      rating: Number(form.rating),
    }

    const url = editingId ? `${API_URL}/movies/${editingId}` : `${API_URL}/movies`
    const method = editingId ? 'PATCH' : 'POST'

    fetch(url, {
      method,
      headers: getHeaders(),
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to save movie')
        setForm(emptyForm)
        setEditingId(null)
        setShowForm(false)
        window.location.reload()
      })
      .catch((err) => alert(err.message))
  }

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to delete this movie?')) return
    fetch(`${API_URL}/movies/${id}`, { method: 'DELETE', headers: getHeaders() })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete movie')
        window.location.reload()
      })
      .catch((err) => alert(err.message))
  }

  const handleEdit = (movie) => {
    setShowForm(true)
    setForm({
      title: movie.title,
      year: movie.year,
      rating: movie.rating,
      plot: movie.plot,
      posterUrl: movie.posterUrl,
      genreIds: movie.genres.map((g) => g.id),
    })
    setEditingId(movie.id)
  }

  const handleCancel = () => {
    setForm(emptyForm)
    setEditingId(null)
    setShowForm(false)
  }

  return { form, editingId, showForm, setShowForm, handleChange, handleGenreChange, handleSubmit, handleEdit, handleDelete, handleCancel }
}

export default useMovieForm
