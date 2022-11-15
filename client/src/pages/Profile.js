import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
  let navigate = useNavigate()

  return user ? (
    <div>
      <div>
        <h1>Welcome!</h1>
      </div>
      <div>
        <h3>User Details</h3>
        <h6>Name: </h6>
        <h6>Username:</h6>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Profile
