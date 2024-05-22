import { EmojisGrid } from './components/emojisGrid/EmojisGrid.jsx'
import { Filters } from './components/filters/Filters.jsx'
import { CopiedMessage } from './components/CopiedMessage.jsx'

function App() {

  return (
    <>
      <header>
        <h1 className='title'>EMOJI FINDER</h1>
        <Filters />
      </header>
      <EmojisGrid />

      <CopiedMessage />
    </>
  )
}
export default App
