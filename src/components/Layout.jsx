import { NavLink, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './Layout.css'

function Layout() {
  const { isLoggedIn, isAdmin, logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
          {isAdmin && <NavLink to="/admin">Admin</NavLink>}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-logout">Logout</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
