import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import '../styles/Auth.css'

function Login() {
  const { email, setEmail, password, setPassword, error, handleSubmit } = useLogin()

  return (
    <div className="auth-container">
      <h1>Login</h1>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login
