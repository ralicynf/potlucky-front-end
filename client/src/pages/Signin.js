import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const startState = {
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    if (payload) {
      await setUser(payload)
      setFormState(startState)
      navigate('/')
    } else {
      window.alert('Incorrect Email or Password')
      setFormState({ email: formState.email, password: '' })
    }
  }

  return (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <form className="sign-in-box" onSubmit={handleSubmit}>
            <div className="things">
              <label htmlFor="email">Email</label>
              <input
                className="login-input"
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                value={formState.email}
                required
              />
            </div>
            <div className="things">
              <label htmlFor="password">Password</label>
              <input
                className="login-input"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                value={formState.password}
                required
              />
            </div>
            <div id="login-button">
              <button id="login-btn">Sign in!</button>
            </div>
          </form>
          <div>
            <p>New user?</p>
            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
