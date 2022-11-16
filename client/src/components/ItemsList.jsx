import { useState } from 'react'
import ItemInput from './ItemInput'
import Items from './Items'

const ItemsList = () => {
  const initialState = {
    itemName: ''
  }

  const [items, setItems] = useState([initialState])

  const addItem = () => {
    let list = [...items, 'My Item']
    setItems(list)
    console.log(items)
  }

  const handleChange = (event) => {
    addItem(event.target.value)
  }

  return (
    <div>
      <ItemInput handleChange={handleChange} addItem={addItem} />
      <Items items={items} />
    </div>
  )
}

export default ItemsList
