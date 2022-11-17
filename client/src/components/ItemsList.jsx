import { useState, useEffect } from 'react'
import { GetListItemsForEvent, AddItem } from '../services/ItemServices'

const ItemsList = ({ user, eventId }) => {
  const [items, setItems] = useState([])
  const [addItem, setAddItem] = useState()

  const retrieveItems = async () => {
    const items = await GetListItemsForEvent(eventId)
    if (items) {
      setItems(items)
    }
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

  // return items ? (
  //   <div>
  //     {items?.map((item) => (
  //       <div key={item.id} className="item-list">
  //         <div>
  //           <ul>
  //             <li key={item.id}>
  //               <input type="checkbox">{item.itemName}</input>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     ))}
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="item">Add item: </label>
  //       <input
  //         type="text"
  //         id="itemName"
  //         value={addItem?.itemName || ''}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //   </div>
  // ) : (
  //   <div>
  //     <h4>Add item:</h4>
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="item">Add item: </label>
  //       <input
  //         type="text"
  //         id="itemName"
  //         value={addItem?.itemName || ''}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Add</button>
  //     </form>
  //   </div>
  // )
}

export default ItemsList

//do we need to conditionally render so that only hosts can add? Potentially using hostId
