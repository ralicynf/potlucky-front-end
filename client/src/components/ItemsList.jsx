import axios from "axios";

const ItemsList = () => {
    let itemToRender = <div></div>;

    const [items, setItems] = useState([]);
    const [eventDetails, setEventDetails] = useState();

    //get current Event call
    const getEventDetails = async () => {
        const mainEvent = await axios.get(`/api/${event_id}`)
        setEventDetails(mainEvent.data)
    }

    //get list items call
    

    //const newItem 


    return (
        <div>

        </div>
    )
}

export default ItemsList