import { EmojiCell } from './components/EmojiCell'
import { Filters } from './components/Filters'
import { useEmojis } from './hooks/useEmojis'

function App() {
  const { emojis, getEmojisBySearch, getEmojisByCategory, displayAllEmojis } = useEmojis()
  // const [category, setCategory] = useState()

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
      <main>
        {
          emojis.map((emoji, index) => (
            <EmojiCell key={index}>
              {emoji}
            </EmojiCell>
          ))
        }
      </main>
    </>
  )
}

export default App
