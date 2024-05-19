/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Filters.css'

export function Filters ({ getEmojisBySearch, getEmojisByCategory, displayAllEmojis }) {

  const [query, setQuery] = useState('')
  const categories = [
    {
      name: 'Emotions',
      img_url: 'emotions.png'
    },
    {
      name: 'People & Body',
      img_url: 'peoplenbody.png'
    },
    {
      name: 'Animals & Nature',
      img_url: 'animalsnnature.png'
    },
    {
      name: 'Food & Drink',
      img_url: 'foodndrinks.png'
    },
    {
      name: 'Travel & Places',
      img_url: 'travelnplaces.png'
    },
    {
      name: 'Activities',
      img_url: 'activities.png'
    },
    {
      name: 'Objects',
      img_url: 'objects.png'
    },
    {
      name: 'Symbols',
      img_url: 'symbols.png'
    },
    {
      name: 'Flags',
      img_url: 'flags.png'
    }
  ]

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

  const displayCategories = () => (
    categories.map((category, index) => (
      <Category
       key={index}
       name={category.name}
       img_url={`
        src/assets/icons/categories/${category.img_url}
        `}
      />
   ))
  )

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
      <section className='categories-wrapper'>
        {displayCategories()}
      </section>
    </>
  )
}

function Category ({ name, img_url }) {

  const handleClick = () => {

  }

  return (
    <div className="category">
      <img 
        src={img_url} alt={name} title={name}
        onClick={handleClick}
      />
    </div>
  )
}