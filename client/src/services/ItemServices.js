import Client from './api'

export const GetListItemsForEvent = async (eventId) => {
  try {
    const res = await Client.get(`/items/events/${eventId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddItem = async (items) => {
  try {
    const res = await Client.post(`/items`, items)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteItem = async (itemId) => {
    try {
        const res = await Client.delete(`/items/${itemId}`)
        return res.data
    } catch (error) {
        throw error
    }
}
