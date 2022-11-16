import { useEffect, useState } from 'react'
import { GetCommentsForEvent } from '../services/CommentServices'

const Comments = ({ user, eventId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const handleComments = async () => {
      const data = await GetCommentsForEvent(eventId)
      if (data) {
        setComments(data)
      }
    }
    handleComments()
  }, [])

  return comments.length > 0 ? (
    <div>
      <h2>-----------------------------</h2>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <h5>{comment.author.username}</h5>
          <section className="comment-content">
            <p>{comment.comment}</p>
            {comment.createdAt === comment.updatedAt ? <b></b> : <b>edited</b>}
          </section>
          <section className="comment-date">
            <h6>{comment.createdAt}</h6>
          </section>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h2>-----------------------------</h2>
      <p>write the first comment!</p>
      <p type="text">work in progress...</p>
    </div>
  )
}

export default Comments
