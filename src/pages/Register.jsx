import { Link } from 'react-router-dom'
import useRegister from '../hooks/useRegister'
import '../styles/Auth.css'

function Register() {
  const { email, setEmail, password, setPassword, error, handleSubmit } = useRegister()

  return (
    <div className="auth-container">
      <h1>Register</h1>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register
