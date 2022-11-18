import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { GetEventsByUser, GetEventsByHost } from '../services/EventServices'
import SignIn from './Signin'

const Home = ({ user, setUser }) => {
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
    if (user) handleEvents()
  }, [user])

  const viewEventDetails = (id) => {
    navigate(`/events/${id}`)
  }

  return user ? (
    <div>
      <div className="flex-column">
        <h1 id="homepage-header">Upcoming Events</h1>
        <div className="events-container flex-row">
          <div className="hosting-card-container">
            <h2 className='title'>Hosting</h2>
            {userHostedEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                isHost={true}
                eventName={event.eventName}
                eventDate={event.date}
                eventLocation={event.location}
                eventDescription={event.description}
                items={event.items}
                userId={user.id}
                onClick={viewEventDetails}
              />
            ))}
          </div>
          <div className="attending-card-container">
            <h2 className='title'>Attending</h2>
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                isHost={false}
                eventName={event.eventName}
                eventDate={event.date}
                eventLocation={event.location}
                eventDescription={event.description}
                items={event.items}
                userId={user.id}
                onClick={viewEventDetails}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <SignIn setUser={setUser} />
    </div>
  )
}

export default Home
