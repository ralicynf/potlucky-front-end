import { useState, useEffect } from 'react'
import Avatar from 'boring-avatars'
import {
  GetListItemsForEvent,
  AddItem,
  DeleteItem
} from '../services/ItemServices'

const ItemsList = ({ user, eventId }) => {
  const [items, setItems] = useState([])
  const [addItem, setAddItem] = useState()

  const retrieveItems = async () => {
    const items = await GetListItemsForEvent(eventId)
    if (items) {
      setItems(items)
    }
  }

  const deleteItem = async (itemId) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      await DeleteItem(itemId)
    }
    retrieveItems()
  }

  useEffect(() => {
    if (user) retrieveItems()
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await AddItem(addItem)
    setAddItem(null)
    retrieveItems()
  }

  const handleChange = (event) => {
    setAddItem({
      [event.target.id]: event.target.value,
      userId: user?.id,
      eventId: eventId
    })
  }

  return (
    <div>
      {items?.map((item) => (

        <div key={item.id} className="item-listing">
          <Avatar
            size={40}
            name={item.userItems.name}
            variant="beam"
            colors={['#F9DED3', '#FDD1B6', '#FAB4B6', '#C7B6BE', '#89ABB4']}
          />
          <p id="item-listing-content">
            {item.userItems.name} is bringing {item.itemName}
          </p>
          <div>
          {item.userId === user.id ? <button onClick={()=> deleteItem(item.id)}>X</button> : <></>}
          </div>

        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="itemName"
          value={addItem?.itemName || ''}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ItemsList
