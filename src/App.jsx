import { EmojisGrid } from './components/EmojisGrid.jsx'
import { Filters } from './components/Filters.jsx'
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
