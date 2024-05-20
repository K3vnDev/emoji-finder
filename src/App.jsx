import { EmojisGrid } from './components/EmojisGrid.jsx'
import { Filters } from './components/Filters.jsx'
import { useCopiedMessage } from './hooks/useCopiedMessage.js'
import { useEmojisData } from './context/useEmojisData.js'

function App() {
  const { emojis } = useEmojisData()
  const { copiedMessage, showCopiedMessage } = useCopiedMessage()

  return (
    <>
      <header>
        <h1 className='title'>EMOJI FINDER</h1>
        <Filters />
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
