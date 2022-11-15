import CreateEventForm from '../components/CreateEventForm'

const NewEvent = ({ user }) => {
  return (
    <div className="event-form">
      <h1>Create New Event</h1>
      <CreateEventForm user={user} />
    </div>
  )
}

export default NewEvent
