import axios from "axios";
import { useEffect, useState } from "react";

const ItemsList = () => {
    let itemToRender = <div></div>;

    const [items, setItems] = useState([]);
    const [eventDetails, setEventDetails] = useState();
    const [currentUser, setCurrentUser] = useState('');

    //get current user
    const getCurrentUser = async () => {
        const userObject = await axios.get(`/api/users/`)
    }

    // //get current Event call
    // const getEventDetails = async () => {
    //     const mainEvent = await axios.get(`/api/events/`)
    //     setEventDetails(mainEvent.data)
    // } 

    //get list items call
    const getAllItems = async () => {
        const items = await axios.get(`/api/items/`);
        setItems(items.data)
    }

    useEffect(() => {
        getCurrentUser(user_id)

    })

    //const newItem 
   const handleSubmit = async (event) => {
    event.preventDefault(); 

    const newItem = await axios.post
   }


    return (
        <div>

        </div>
    )
}

export default ItemsList