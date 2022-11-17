import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comments from '../components/Comments'
import {
  GetEventById,
  AddGuest,
  DeleteEvent,
  UpdateEvent
} from '../services/EventServices'

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

  const handleEventDetails = async () => {
    const data = await GetEventById(id)
    setEventDetails(data)
    if (eventDetails)
      setFormState({
        date: eventDetails.date,
        location: eventDetails.location,
        description: eventDetails.description
      })
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
    // console.log(data)
    setEdit(false)
    handleEventDetails()
  }

  const editOnClick = () => {
    setEdit(true)
  }

  // const deleteOnClick = async (e) => {
  //   await DeleteEvent(eventDetails.id)
  // } I think we need cascade in our model associations, or else this needs to be a multi-step delete

  useEffect(() => {
    handleEventDetails()
  }, [user])

  return (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <h2>{eventDetails?.eventName}</h2>
          <div>
            {user?.id === eventDetails?.hostedBy.id ? (
              <div>
                <p>this is your event</p>
                <button onClick={editOnClick}>Edit</button>
                <button onClick={() => console.log('delete button clicked')}>
                  Delete
                </button>
              </div>
            ) : (
              <div>
                <h4>Host:</h4>
                <p>{eventDetails?.hostedBy.name}</p>
              </div>
            )}
          </div>

            <div>
                <h4>What to Bring:</h4>
                <ItemsList />
            </div>
            
          <div>
            {edit ? (
              <form onSubmit={handleSubmit}>
                <h4>What:</h4>
                <input
                  type="text"
                  value={formState.description}
                  id="description"
                  onChange={handleChange}
                />
              </form>
            ) : (
              <div>
                <h4>What:</h4>
                <p>{eventDetails?.description}</p>
              </div>
            )}
          </div>
          {user ? (
            <div>
              {eventDetails?.attendees.find((guest) => guest.id === user.id) ? (
                <></>
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
      </div>
      <div className="events-container flex-row">
        {user &&
        eventDetails?.attendees.find((guest) => guest.id === user.id) ? (
          <div className="hosting-card-container card">
            <div className="buffer">
              <Comments user={user} eventId={id} />
            </div>
          </div>
        ) : (
          <></>
        )}
        {user &&
        eventDetails?.attendees.find((guest) => guest.id === user.id) ? (
          <div className="attending-card-container card">
            <div className="buffer">
              <h4>Who:</h4>
              {eventDetails?.attendees.map((guest) => (
                <div key={guest.id}>
                  <p>{guest.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default EventDetails
