/* eslint-disable react/prop-types */

export function EmojisGrid ({ emojis, showCopiedMessage }) {
  if (emojis.length === 0) return (
    <main style={{background: 'transparent'}}>
      <div className="loading-circle" />
    </main>
  )

  return (
    <main>
      {
        emojis.map((emoji, index) => (
          <EmojiCell
            key={index}
            showCopiedMessage={showCopiedMessage}
          >
            {emoji}
          </EmojiCell>
        ))
      }
    </main>
  )
}

export function EmojiCell ({ children, showCopiedMessage }) {
  
  const handleClick = () => {
    navigator.clipboard.writeText(children)
    showCopiedMessage()
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