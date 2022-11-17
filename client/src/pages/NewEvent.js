import CreateEventForm from '../components/CreateEventForm'
import { useNavigate } from 'react-router-dom'

const NewEvent = ({ user }) => {
  let navigate = useNavigate()

  return user ? (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <h2>Create New Event</h2>
          <CreateEventForm user={user} />
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default NewEvent
