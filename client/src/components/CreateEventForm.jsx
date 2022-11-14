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

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value});
    }

    return (
        <div className="the-form">
            <div onSubmit={handleSubmit}>
                <label htmlFor="Event Name">Event Name:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="eventName"
                        value={formState.eventName}
                    />
                <label htmlFor="Event Date">Event Date:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="eventDate"
                        value={formState.eventDate}
                    />
                <label htmlFor="Event Location">Event Location:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="eventLocation"
                        value={formState.eventLocation}
                    />
                <label htmlFor="Event Description">Event Description:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="eventDescription"
                        value={formState.eventDescription}
                    />
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default CreateEventForm


//eventname, date, location, description