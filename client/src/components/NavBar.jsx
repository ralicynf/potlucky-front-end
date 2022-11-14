import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/newevent">Create Event</Link>
        <Link onClick={handleLogout} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <nav>
        <div id="nav-logo">
          <h1>Potlucky</h1>
        </div>
        <div></div>
        <div className="nav-links">
          {user ? authenticatedOptions : publicOptions}
        </div>
      </nav>
    </header>
  )
}

export default NavBar

//things to do: conditionally render so that SignIn and SignOut are interchangeable
