import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const startState = {
    username: '',
    name: '',
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formState.username,
      name: formState.name,
      email: formState.email,
      password: formState.password
    })
    setFormState(startState)
    navigate('/signin')
  }

  return (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <form className="col" onSubmit={handleSubmit}>
            <div className='hello'>
              <label htmlFor="username">Username  </label>
              <input
                className='input-reg'
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="username"
                value={formState.username}
                required
              />
            </div>
            <div className='hello'>
              <label htmlFor="name">Name  </label>
              <input
              className='input-reg'
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="name"
                value={formState.name}
                required
              />
            </div>
            <div className='hello'>
              <label htmlFor="email">Email  </label>
              <input
                className='input-reg'
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                value={formState.email}
                required
              />
            </div>
            <div className='hello'>
              <label htmlFor="password">Password  </label>
              <input
                className='input-reg'
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                value={formState.password}
                required
              />
            </div>
            <div className='the-btn'>
              <button id="register-button">Register</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

//username, name, email, password,
