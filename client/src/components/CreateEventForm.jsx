import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateEvent } from '../services/EventServices'

const CreateEventForm = ({ user }) => {
  let navigate = useNavigate()


  const startState = {
    eventName: '',
    date: '',
    location: '',
    description: '',
    userId: [user.id],
    hostId: user.id
  }

  const [formState, setFormState] = useState(startState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newEvent = await CreateEvent(formState)
    setFormState(startState)
    navigate(`/events/${newEvent.id}`)
    }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
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
            id="date"
            value={formState.date}
          />
        </div>
        <div>
          <label htmlFor="Event Location">Event Location:</label>
          <input
            onChange={handleChange}
            type="text"
            id="location"
            value={formState.location}
          />
        </div>
        <div>
          <label htmlFor="Event Description">Event Description:</label>
          <input
            onChange={handleChange}
            type="text"
            id="description"
            value={formState.description}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateEventForm

//eventname, date, location, description
