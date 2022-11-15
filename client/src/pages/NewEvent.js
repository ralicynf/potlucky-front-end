import CreateEventForm from '../components/CreateEventForm'
import { useNavigate } from 'react-router-dom'

const NewEvent = ({ user }) => {
  let navigate = useNavigate()

  return user ? (
    <div className="event-form">
      <h1>Create New Event</h1>
      <CreateEventForm />
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default NewEvent
