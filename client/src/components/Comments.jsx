import { useEffect, useState } from 'react'
import { GetCommentsForEvent } from '../services/CommentServices'

const Comments = ({ user, eventId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const handleComments = async () => {
      const data = await GetCommentsForEvent()
      setComments(data)
    }
    handleComments()
  }, [])

  return comments.length > 0 ? (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>{user.id}</h5>
          <section className="comment-content">
            <p>{comment.comment}</p>
            {comment.createdAt === comment.updatedAt ? <></> : <></>}
          </section>
          <section className="comment-date">
            <h6>{comment.createdAt}</h6>
          </section>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <p>write the first comment!</p>
      <input type="text">work in progress...</input>
    </div>
  )
}

export default Comments
