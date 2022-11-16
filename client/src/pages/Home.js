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
      <div className="flex-column">
        <h2>Upcoming Events</h2>
        <div className="events-container flex-row">
          <div className="hosting-card-container">
            <h2>Hosting</h2>
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
          <div className="attending-card-container">
            <h2>Attending</h2>
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
          </div>
        </div>
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
