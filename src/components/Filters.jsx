/* eslint-disable react/prop-types */
import { Categories } from './Categories'
import { SearchIcon, ClearSearchIcon } from './SearchIcons'
import { useSearch } from '../hooks/useSearch'
import './Filters.css'

export function Filters() {
  const { 
    query, changeInput, searchEmojis, searchCategory, clearSearch, hasSearched 
  } = useSearch()

  return (
    <>
      <form className='search-wrapper' onSubmit={searchEmojis}>
        <input
          type='text'
          placeholder='Search Emoji...'
          onChange={changeInput}
          value={query}
        />
        <button className='make-search'>
          <SearchIcon />
        </button>
        <button 
          className={`clear-search${hasSearched ? '' : ' hidden'}`} 
          onClick={clearSearch}
        >
          <ClearSearchIcon />
        </button>
      </form>
      <Categories searchCategory={searchCategory} />
    </>
  )
}
