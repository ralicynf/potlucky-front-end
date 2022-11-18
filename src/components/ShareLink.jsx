import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShareLink = () => {
  const location = useLocation()
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(
      `https://feelingpotlucky.herokuapp.com${location.pathname}`
    )
    setCopied(true)
  }

  return (
    <div className="share-container">
      <div className="share-section">
        <h5>
          Share this link:{' '}
          {`https://feelingpotlucky.herokuapp.com${location.pathname}`}
        </h5>
        <div className="share">
          {!copied ? (
            <button id="copy-btn" type="button" onClick={handleClick}>
              Copy
            </button>
          ) : (
            <h6>Copied!</h6>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShareLink
