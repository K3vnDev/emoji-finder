import { EmojisGrid } from './components/emojisGrid/EmojisGrid.jsx'
import { Filters } from './components/filters/Filters.jsx'
import { CopiedMessage } from './components/CopiedMessage.jsx'
import { AnimatedBackground } from './components/animatedBackground/AnimatedBackground.jsx'

function App() {

  return (
    <>
      <header>
        <h1 className='title'>EMOJI FINDER</h1>
        <Filters />
      </header>
      <EmojisGrid />

      <CopiedMessage />
      <AnimatedBackground />
    </>
  )
}
export default App

