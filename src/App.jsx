import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Favorites from './pages/Favorites'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import useFavorites from './hooks/useFavorites'

function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies isFavorite={isFavorite} />} />
        <Route path="/movies/:id" element={<MovieDetail isFavorite={isFavorite} toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
