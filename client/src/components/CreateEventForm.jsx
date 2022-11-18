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
        <div className="e-name">
          <label htmlFor="Event Name">Event Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="eventName"
            value={formState.eventName}
          />
        </div>
        <div className="e-date">
          <label htmlFor="Event Date">Event Date:</label>
          <input
            onChange={handleChange}
            type="datetime-local"
            id="date"
            value={formState.date}
          />
        </div>
        <div className='e-loc'>
          <label htmlFor="Event Location">Event Location:</label>
          <input
            onChange={handleChange}
            type="text"
            id="location"
            value={formState.location}
          />
        </div>
        <div className='e-des'>
          <label htmlFor="Event Description">Event Description:</label>
          <textarea
            rows="4"
            cols="50"
            onChange={handleChange}
            id="description"
            value={formState.description}
          />
        </div>
        <div className='sub-event-btn'>
          <button id="sub-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateEventForm

//eventname, date, location, description
