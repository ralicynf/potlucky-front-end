import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetEvents } from '../services/EventServices'

const Home = ({ user }) => {
  let navigate = useNavigate()
  const [events, setEvents] = useState([])

  useEffect(() => {
    const handleEvents = async () => {
      const data = await GetEvents()
      setEvents(data)
    }
    handleEvents()
  }, [])

  return user ? (
    <div>
      <div>
        <h3>Your Events</h3>
        {events.map((event) => (
          <div key={event.id}>
            <p>{event.eventName}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Please sign in</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Home
