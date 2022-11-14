import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignIn = () => {
   let navigate = useNavigate()

   const startState = {
        username: '',
        password: ''
   }

   const [formState, setFormState] = useState(startState)

   const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
   }

   const handleSubmit = async (e) => {

   }
    
    return (
        <div className='signin'>  
            <div className='sign-in-box' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input 
                        onChange={handleChange}
                        name='username'
                        type='text'
                        placeholder='username'
                        value={formState.username}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        onChange={handleChange}
                        name='password'
                        type='text'
                        placeholder='password'
                        value={formState.password}
                        required
                    />
                </div>
                <button>Sign in!</button>
            </div> 
        </div>
    )

}

export default SignIn