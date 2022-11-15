import Client from './api'

export const CreateEvent = async (formData) => {
  try {
    await Client.post('/api/events')
  } catch (error) {
    throw error
  }
}
