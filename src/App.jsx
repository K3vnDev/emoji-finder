import { EmojisGrid } from './components/EmojisGrid.jsx'
import { Filters } from './components/Filters.jsx'
import { useEmojis } from './hooks/useEmojis.js'
import { useCopiedMessage } from './hooks/useCopiedMessage.js'

function App() {
  const { 
    emojis, getEmojisBySearch, 
    getEmojisByCategory, displayAllEmojis 
  } = useEmojis()
  const { copiedMessage, showCopiedMessage } = useCopiedMessage()

  return (
    <>
      <header>
        <h1 className='title'>EMOJI FINDER</h1>
        <Filters 
          getEmojisBySearch={getEmojisBySearch}
          getEmojisByCategory={getEmojisByCategory}
          displayAllEmojis={displayAllEmojis}
        />
      </header>
      <EmojisGrid 
        emojis={emojis}
        showCopiedMessage={showCopiedMessage}
      />
      {
        copiedMessage !== '' &&
        <div className='copied-message'>
          {copiedMessage}
        </div>
      }
    </>
  )
}
export default App
