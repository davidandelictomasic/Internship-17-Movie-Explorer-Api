import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
