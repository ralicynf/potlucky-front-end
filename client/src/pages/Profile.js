import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = (user) => {
   let navigate = useNavigate()
    
    return (
        <div>
            <div> 
                <h1>Welcome!</h1>
            </div>
            <div>
                <h3>User Details</h3>
                <h6>Name: </h6>
                <h6>Username:</h6>
            </div>
            <div>
                <h3>Events Dashboard</h3>
            </div>
        </div>
    )

}

export default Profile
