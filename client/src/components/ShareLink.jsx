import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShareLink = () => {
  const location = useLocation()
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`)
    setCopied(true)
  }

  return (
    <div className="share-container">
      <h3>Share this link: {`http://localhost:3000${location.pathname}`}</h3>
      <section>
        {!copied ? (
          <button type="button" onClick={handleClick}>
            copy
          </button>
        ) : (
          <h6>Done</h6>
        )}
      </section>
    </div>
  )
}

export default ShareLink
