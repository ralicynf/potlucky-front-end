import Client from './api'

export const CreateEvent = async (formData) => {
  try {
    await Client.post('/api/events')
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
