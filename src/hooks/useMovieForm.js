import { useState } from 'react'

const API_URL = 'http://localhost:3000'
const emptyForm = { title: '', year: '', rating: '', plot: '', posterUrl: '', genreIds: [] }

function useMovieForm() {
  const [form, setForm] = useState(emptyForm)

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

    fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to create movie')
        setForm(emptyForm)
        window.location.reload()
      })
      .catch((err) => alert(err.message))
  }

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to delete this movie?')) return
    fetch(`${API_URL}/movies/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete movie')
        window.location.reload()
      })
      .catch((err) => alert(err.message))
  }

  return { form, handleChange, handleGenreChange, handleSubmit, handleDelete }
}

export default useMovieForm
