import { useState, useEffect } from 'react'
import { GetListItemsForEvent, AddItem, DeleteItem } from '../services/ItemServices'

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
    if (window.confirm("Are you sure you wish to delete this item?")) {
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
        <div key={item.id}>
          <p>
            {item.userItems.name} is bringing {item.itemName}
          </p>
          <button onClick={()=> deleteItem(item.id)}>X</button>
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
