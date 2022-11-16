import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetEventById } from '../services/EventServices'
import Comments from '../components/Comments'

const EventDetails = ({ user }) => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [eventDetails, setEventDetails] = useState(null)

  const handleEventDetails = async () => {
    const data = await GetEventById(id)
    setEventDetails(data)
  }

  useEffect(() => {
    handleEventDetails()
  }, [])

  return user ? (
    <div>
      <h3>{eventDetails?.eventName}</h3>
      <div>
        <h4>Host:</h4>
        <p>{eventDetails?.hostedBy.name}</p>
      </div>
      <div>
        <h4>When:</h4>
        <p>{eventDetails?.date}</p>
      </div>
      <div>
        <h4>Where:</h4>
        <p>{eventDetails?.location}</p>
      </div>
      <div>
        <h4>What:</h4>
        <p>{eventDetails?.description}</p>
      </div>
      <div>
        <h4>Who:</h4>
        {eventDetails?.attendees.map((guest) => (
          <div key={guest.id}>
            <p>{guest.name}</p>
          </div>
        ))}
      </div>
      <section className="comment-section">
        <Comments user={user} eventId={id} />
      </section>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default EventDetails
