import CreateEventForm from '../components/CreateEventForm'
import { useNavigate } from 'react-router-dom'
import SignIn from './Signin'

const NewEvent = ({ user, setUser }) => {
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
      <SignIn setUser={setUser} />
    </div>
  )
}

export default NewEvent
