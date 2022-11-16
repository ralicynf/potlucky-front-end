import Client from './api'

export const GetCommentsForEvent = async (eventId) => {
  try {
    const res = await Client.get(`/comments/${eventId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
