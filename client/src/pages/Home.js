import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { GetEventsByUser, GetEventsByHost } from '../services/EventServices'

const Home = ({ user }) => {
  let navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [userHostedEvents, setUserHostedEvents] = useState([])

  const handleEvents = async () => {
    const eventsData = await GetEventsByUser(user.id)
    const userHostedEventsData = await GetEventsByHost(user.id)
    setEvents(eventsData.events)
    setUserHostedEvents(userHostedEventsData)
  }

  useEffect(() => {
    user ? handleEvents() : console.log('no user yet')
    console.log(user)
  }, [user])

  const viewEventDetails = (id) => {
    navigate(`/events/${id}`)
  }

  return user ? (
    <div>
      <div>
        <h2>Your Events</h2>
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            eventName={event.eventName}
            eventDate={event.date}
            eventLocation={event.location}
            onClick={viewEventDetails}
          />
        ))}
        <h2>-------------------------------</h2>
        <h2>Events You Are Hosting</h2>
        {userHostedEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            eventName={event.eventName}
            eventDate={event.date}
            eventLocation={event.location}
            onClick={viewEventDetails}
          />
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
