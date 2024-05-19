/* eslint-disable react/prop-types */
import { Categories } from './Categories'
import { useState } from 'react'
import './Filters.css'


export function Filters ({ getEmojisBySearch, getEmojisByCategory, displayAllEmojis }) {

  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query !== ''){
      getEmojisBySearch(query)
      setQuery('')
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClearSearch = () => {
    displayAllEmojis()
  }

  return (
    <>
      <form className='search-wrapper' onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Smiley Face...' 
          onChange={handleChange}
          value={query}
        />
        <button className='make-search' />
        <button className='clear-search' onClick={handleClearSearch} />
      </form>
      <Categories getEmojisByCategory={getEmojisByCategory} />
    </>
  )
}