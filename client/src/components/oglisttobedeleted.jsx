// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from 'react-router-dom'
// import { GetEventById } from '../services/EventServices'

// const ItemsList = () => {
//     let { userId, eventId } = useParams()

//     const initialState = {
//         itemName: ''
//     }

//     const [formState, setFormState] = useState(initialState)
//     const [items, setItems] = useState([]);
//     const [eventDetails, setEventDetails] = useState();
//     const [currentUser, setCurrentUser] = useState('');

// //get current user
//     const getCurrentUser = async () => {
//         const userObject = await axios.get(`/api/users/`)
//         console.log(userObject)
//         }
//     console.log(getCurrentUser)

// //get current Event call
//     // const getEventDetails = async () => {
//     //     const mainEvent = await axios.get(`/api/events/`)
//     //     setEventDetails(mainEvent.data)
//     // } 

// //get list items call
//     const getAllItems = async () => {
//         const items = await axios.get(`/api/items/`);
//         setItems(items.data)
//     }

//     const handleChange = async (event) => {
//         console.log(event.target)
//         setFormState({...formState, [event.target] : event.target});
//     }
    

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         const newItem = await axios.post(`/api/items`, formState).then((response) => {
//             return response;
//         })
//         .catch((error) => {
//             console.error(error);
//         })
//         setFormState(initialState);

//     }

//     return (
//         <div className='items-box'>
//             <h3>Add items:</h3>
//             <div className='items-list'>
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         onChange={handleChange}
//                         type='text'
//                         id='new-item'
                        
//                     />
//                     <button type='submit'>Add</button>
//                 </form>
//                 <ul className='list'>
//                     <li>
                    
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default ItemsList
