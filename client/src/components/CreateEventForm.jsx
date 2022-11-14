import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEventForm = () => {
    let navigate = useNavigate()

    const eventDetails = () => {
        navigate('/event')
    }
 
    const startState = {
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: ''
    }

    const [formState, setFormState] = useState(startState)

    const handleSubmit = async (event) => {
        event.preventDefault()
        //axios call here
        setFormState(startState)
        eventDetails()
    }

    return (
        <div>

        </div>
    )
}

export default CreateEventForm


//eventname, date, location, description