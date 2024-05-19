/* eslint-disable react/prop-types */

export function EmojisGrid ({ emojis }) {
  return (
    <main>
      {
        emojis.map((emoji, index) => (
          <EmojiCell key={index}>
            {emoji}
          </EmojiCell>
        ))
      }
    </main>
  )
}

export function EmojiCell ({ children }) {
  
  const handleClick = () => {
    navigator.clipboard.writeText(children)
    //show alert
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