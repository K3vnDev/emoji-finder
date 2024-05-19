import { EmojisGrid } from './components/EmojisGrid.jsx'
import { Filters } from './components/Filters.jsx'
import { useEmojis } from './hooks/useEmojis.js'

function App() {
  const { 
    emojis, getEmojisBySearch, getEmojisByCategory, displayAllEmojis 
  } = useEmojis()

  return (
    <>
      <header>
        <h1 className='title'>EMOJI FINDER</h1>
        <Filters 
          getEmojisBySearch={getEmojisBySearch}
          displayAllEmojis={displayAllEmojis}
          getEmojisByCategory={getEmojisByCategory}
        />
      </header>
      {
        emojis.length > 0 &&
        <EmojisGrid emojis={emojis} />
        //TODO: Loading and show not found
      }
    </>
  )
}

export default App
