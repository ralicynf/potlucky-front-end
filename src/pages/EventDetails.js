import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comments from '../components/Comments'
import ItemsList from '../components/ItemsList'
import ShareLink from '../components/ShareLink'
import {
  GetEventById,
  AddGuest,
  DeleteEvent,
  UpdateEvent
} from '../services/EventServices'
import Avatar from 'boring-avatars'

const EventDetails = ({ user }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initialState = {
    date: '',
    location: '',
    description: ''
  }
  const [eventDetails, setEventDetails] = useState(null)
  const [edit, setEdit] = useState(false)
  const [formState, setFormState] = useState(initialState)
  const [sharing, setSharing] = useState(false)

  const handleEventDetails = async () => {
    const data = await GetEventById(id)
    setEventDetails(data)
  }

  const handleClick = async (e) => {
    await AddGuest(id, { userId: user.id })
    handleEventDetails()
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateEvent(id, formState)
    setEdit(false)
    handleEventDetails()
  }

  const editOnClick = () => {
    setEdit(true)
    setFormState({
      date: eventDetails.date,
      location: eventDetails.location,
      description: eventDetails.description
    })
  }

  const deleteOnClick = async (e) => {
    if (window.confirm('Are you sure you wish to delete this event?')) {
      await DeleteEvent(eventDetails.id)
      navigate('/')
    }
  }

  useEffect(() => {
    handleEventDetails()
  }, [user])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const formatTime = (dateString) => {
    const options = { timeStyle: 'short' }
    return new Date(dateString).toLocaleTimeString('en-US', options)
  }

  return (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <div className="event-detail-header">
            <h2 id="event-name">{eventDetails?.eventName}</h2>
            <div className="share-deets">
              <button
                className="share-event-button"
                type="button"
                onClick={() => {
                  sharing ? setSharing(false) : setSharing(true)
                }}
              >
                Share?
              </button>
              {sharing && <ShareLink />}
            </div>
          </div>
          <div>
            {user?.id === eventDetails?.hostedBy.id ? (
              <div className="your-event">
                <p>You are hosting this event</p>
                <div className="edit-and-delete">
                  <button id="edit-btn" onClick={editOnClick}>
                    Edit
                  </button>
                  <button id="delete-btn" onClick={deleteOnClick}>
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h4>Host:</h4>
                <p className="indent">{eventDetails?.hostedBy.name}</p>
              </div>
            )}
          </div>
          <div>
            {edit ? (
              <form onSubmit={handleSubmit}>
                <div className="when">
                  <h4>When:</h4>
                  <input
                    type="datetime-local"
                    value={formState.date}
                    id="date"
                    onChange={handleChange}
                  />
                </div>
                <div className="where">
                  <h4>Where:</h4>
                  <input
                    type="text"
                    value={formState.location}
                    id="location"
                    onChange={handleChange}
                  />
                </div>
                <div className="what">
                  <h4>What:</h4>
                  <textarea
                    rows="4"
                    cols="50"
                    onChange={handleChange}
                    id="description"
                    value={formState.description}
                  />
                </div>
                <div className="sub-btn-the-second">
                  <button id="sub-btn-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div>
                {user && (
                  <div>
                    <h4>When:</h4>
                    <p className="indent">
                      {formatDate(eventDetails?.date)} at{' '}
                      {formatTime(eventDetails?.date)}
                    </p>
                    <h4>Where:</h4>
                    <p className="indent">{eventDetails?.location}</p>
                  </div>
                )}
                <h4>What:</h4>
                <p className="indent">{eventDetails?.description}</p>
              </div>
            )}
          </div>
          {user ? (
            <div>
              {eventDetails?.attendees.find((guest) => guest.id === user.id) ||
              user?.id === eventDetails?.hostedBy.id ? (
                <></>
              ) : (
                <div>
                  <button id="rsvp-btn" onClick={handleClick}>
                    RSVP
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h3>Please sign in or register to RSVP</h3>
              <button
                className="signin-btn"
                onClick={() => navigate('/signin')}
              >
                Sign In
              </button>
              <button
                className="register-btn"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      {user &&
      (eventDetails?.attendees.find((guest) => guest.id === user.id) ||
        user?.id === eventDetails?.hostedBy.id) ? (
        <div className="events-container flex-row flex-start">
          <div className="hosting-card-container">
            <div className="card">
              <div className="buffer">
                <div className="items-list">
                  <div className="items-header">
                    <h4>What is everyone bringing?</h4>
                  </div>
                  <div className="items-list-of-things">
                    <ItemsList user={user} eventId={id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="buffer">
                <div className="comments-sect">
                  <h4>Comments:</h4>
                  <Comments user={user} eventId={id} />
                </div>
              </div>
            </div>
          </div>
          <div className="attending-card-container card">
            <div className="buffer">
              <h4>Who:</h4>
              {eventDetails?.attendees.map((guest) => (
                <div key={guest.id} className="attendee-listing">
                  <Avatar
                    size={40}
                    name={guest.name}
                    variant="beam"
                    colors={[
                      '#F9DED3',
                      '#FDD1B6',
                      '#FAB4B6',
                      '#C7B6BE',
                      '#89ABB4'
                    ]}
                  />
                  <p id="attendee-listing-content">{guest.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default EventDetails
