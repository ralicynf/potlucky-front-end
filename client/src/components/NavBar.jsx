import { Link, useNavigate } from 'react-router-dom'
import { GetEvents } from '../services/EventServices'

const NavBar = ({ user, handleLogout, randomEvent }) => {
  let authenticatedOptions
  let navigate = useNavigate()

  const getRandomEvent = async () => {
    console.log('firing')
    let events = await GetEvents()
    if (events) {
      console.log('i got events!')
      let randomEvent = events[Math.floor(Math.random() * events.length)]
      navigate(`/events/${randomEvent.id}`)
      window.location.reload(false)
    }
  }

  if (user) {
    authenticatedOptions = (
      <nav className="flex-row nav-links">
        {/* <h3>Welcome {user.email}!</h3> */}
        <Link to="/">Home</Link>
        {/* <Link to="/profile">Profile</Link> */}
        <Link to="/newevent">Create Event</Link>
        <a id='potlucky' onClick={getRandomEvent}>Feeling PotLucky?</a>
        {/* <Link to={`/events/${randomEvent}`}>Feeling Potlucky?</Link> */}
        <Link onClick={handleLogout} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="flex-row nav-links">
      <Link to="/">Home</Link>
      <a onClick={getRandomEvent}>Feeling PotLucky?</a>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header id="header">
      <nav className="nav-container flex-row">
        <div id="nav-logo">
          <h1>Potlucky</h1>
        </div>
        <div className="center-column flex-column">
          {user ? authenticatedOptions : publicOptions}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
