import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetEventById, AddGuest } from '../services/EventServices'

const EventDetails = ({ user }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [eventDetails, setEventDetails] = useState(null)
  const [reload, setReload] = useState(true)

  const handleEventDetails = async () => {
    const data = await GetEventById(id)
    setEventDetails(data)
  }

  const handleClick = async (e) => {
    await AddGuest(id, { userId: user.id })
    // navigate(`/events/${id}`)
    window.location.reload(false)
  }

  useEffect(() => {
    handleEventDetails()
  }, [user])

  return (
    <div>
      <h3>{eventDetails?.eventName}</h3>
      <div>
        <h4>Host:</h4>
        <p>{eventDetails?.hostedBy.name}</p>
      </div>
      <div>
        <h4>What:</h4>
        <p>{eventDetails?.description}</p>
      </div>
      {user ? (
        <div>
          <div>
            <h4>When:</h4>
            <p>{eventDetails?.date}</p>
          </div>
          <div>
            <h4>Where:</h4>
            <p>{eventDetails?.location}</p>
          </div>
          <div>
            <h4>Who:</h4>
            {eventDetails?.attendees.map((guest) => (
              <div key={guest.id}>
                <p>{guest.name}</p>
              </div>
            ))}
          </div>
          {eventDetails?.attendees.find((guest) => guest.id === user.id) ? (
            <div>
              <p>You are attending!</p>
            </div>
          ) : (
            <div>
              <button onClick={handleClick}>RSVP</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>Please sign in or register to RSVP</h3>
          <button onClick={() => navigate('/signin')}>Sign In</button>
        </div>
      )}
    </div>
  )
}

export default EventDetails
