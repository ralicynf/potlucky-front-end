import Client from './api'

export const GetCommentsForEvent = async (eventId) => {
  try {
    const res = await Client.get(`/comments/${eventId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (formData) => {
  try {
    const res = await Client.post('/comments', formData)
    return res.data
  } catch (error) {
    throw error
  }
}
