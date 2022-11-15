import Client from './api'

export const CreateEvent = async (formData) => {
  try {
    console.log(formData)
    await Client.post('/events', formData)
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
