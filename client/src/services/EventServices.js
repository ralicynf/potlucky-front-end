import Client from './api'

export const CreateEvent = async (formData) => {
  try {
    console.log(formData)
    await Client.post('/events', formData)
  } catch (error) {
    throw error
  }
}
