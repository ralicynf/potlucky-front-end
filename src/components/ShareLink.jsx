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
      <div className='share-section'>
        <h4>Share this link: {`http://localhost:3000${location.pathname}`}</h4>
        <div className='share'>
          {!copied ? (
            <button id="copy-btn" type="button" onClick={handleClick}>
              copy
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
