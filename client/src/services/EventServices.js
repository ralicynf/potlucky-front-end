import Client from './api'

export const CreateEvent = async (formData) => {
  try {
    const res = await Client.post('/events', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetEvents = async () => {
  try {
    const res = await Client.get('/events')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetEventsByUser = async (userId) => {
  try {
    const res = await Client.get(`/users/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetEventsByHost = async (userId) => {
  try {
    const res = await Client.get(`/events/host/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetEventById = async (id) => {
  try {
    const res = await Client.get(`/events/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddGuest = async (eventId, user) => {
  try {
    const res = await Client.post(`/events/${eventId}/addUsers`, user)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateEvent = async (eventId, update) => {
  try {
    const res = await Client.put(`/events/${eventId}`, update)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteEvent = async (eventId) => {
  try {
    const res = await Client.delete(`/events/${eventId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
