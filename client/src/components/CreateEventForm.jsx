import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/api'

const CreateEventForm = ({user}) => {
    let navigate = useNavigate()

    const eventDetails = () => {
        navigate('/event')
    }
 
    const startState = {
        eventName: '',
        date: '',
        location: '',
        description: '',
        hostId: user.id
    }

    const [formState, setFormState] = useState(startState)

    const handleSubmit = async (event) => {
        event.preventDefault()
        //axios call here
        // const res = await axios.post(`${BASE_URL}/events`, formState)
        // console.log(res.data)
        console.log(user.id)
        setFormState(startState)
        eventDetails()
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value});
    }

    return (
        <div className="the-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Event Name">Event Name:</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="eventName"
                            value={formState.eventName}
                        />
                </div>
                <div>
                    <label htmlFor="Event Date">Event Date:</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="eventDate"
                            value={formState.date}
                        />
                </div>
                <div>
                    <label htmlFor="Event Location">Event Location:</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="eventLocation"
                            value={formState.location}
                        />
                </div>
                <div>
                    <label htmlFor="Event Description">Event Description:</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="eventDescription"
                            value={formState.description}
                        />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEventForm


//eventname, date, location, description