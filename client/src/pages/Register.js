import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
    setFormState({...formState, [e.target.name]: e.target.value})
   }

   const handleSubmit = async (e) => {
   }
    
    return (
        <div>

        </div>
    )

}

export default Register

//username, name, email, password, 