/* eslint-disable react/prop-types */

import { useData } from '../../context/useData.js'
import './EmojisGrid.css'
import { ErrorMessage } from '../errorMessage/ErrorMessage.jsx'

export function EmojisGrid () {
  const { emojis, errorMessage } = useData()
  
  if (errorMessage !== ''){
    return (
      <main style={{background: 'transparent'}}>
        <ErrorMessage msg={errorMessage} />
      </main>
    )
  }

  if (emojis.length === 0){
    return (
      <main style={{background: 'transparent'}}>
        <div className="loading-circle" />
      </main>
    )
  }

  return (
    <main>
      {
        emojis.map((emoji, index) => (
          <EmojiCell
            key={index}
          >
            {emoji}
          </EmojiCell>
        ))
      }
    </main>
  )
}

export function EmojiCell ({ children }) {
  const { showCopiedMessage } = useData()
  
  const handleClick = () => {
    navigator.clipboard.writeText(children)
    showCopiedMessage(children)
  }

  return (
    <div 
      className="emoji-cell"
      onClick={handleClick}
    >
      { children }
    </div>
  )
}