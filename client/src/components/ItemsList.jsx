import { useState, useEffect } from 'react'
import { GetListItemsForEvent, AddItem } from '../services/ItemServices'

const ItemsList = ({ user, eventId }) => {

    //does startState need to include userId and eventId to make sure lists are specific to each event?
    const startState = {

        itemName: ''
    }
    console.log(user)
    
    const [items, setItems] = useState([])
    const [addItem, setAddItem] = useState(startState)

    console.log(items)

    const retrieveItems = async () => {
        const items = await GetListItemsForEvent(eventId)
        if (items) {
            setItems(items)
        }
    }

    useEffect(() => {
        retrieveItems()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await AddItem(addItem)
        retrieveItems()
    }

    const handleChange = (event) => {
        console.log(event.target)
        setAddItem({...addItem, [event.target.id]: event.target.value })
    }

    return items ? (
        <div>
            {items.map((item) => (
                <div className='item-list'>
                    <div>
                        <ul>
                            <li key={item.id}>
                                <input type='checkbox' >
                                {item.itemName}
                                </input>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add item: </label>
                <input 
                    type='text'
                    id="item"
                    value={addItem.item}
                    onChange={handleChange}
                />
                <button type='submit'></button>
            </form>
        </div>
    ) : (
        <div>
            <h4>Add item:</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Add item: </label>
                <input 
                    type='text'
                    id="item"
                    value={addItem.item}
                    onChange={handleChange}
                />
                <button type='submit'></button>
            </form>
        </div>
    )
}

export default ItemsList


//do we need to conditionally render so that only hosts can add? Potentially using hostId