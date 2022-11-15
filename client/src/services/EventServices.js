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

export const GetEventById = async (id) => {
  try {
    const res = await Client.get(`/events/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
