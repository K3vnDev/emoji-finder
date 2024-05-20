import { useState } from "react"

export function useSearch ({ getEmojisBySearch, getEmojisByCategory, displayAllEmojis }) {
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const searchEmojis = (e) => {
    e.preventDefault()
    if (query !== '') {
      getEmojisBySearch(query)
      setHasSearched(true)
      setQuery('')
    }
  }
  const clearSearch = (e) => {
    e.preventDefault()
    if (hasSearched){
      setQuery('')
      displayAllEmojis()
      setHasSearched(false)
    }
  }
  const searchCategory = (index) => {
    getEmojisByCategory(index)
    setHasSearched(true)
  }
  const changeInput = (e) => {
    setQuery(e.target.value)
  }

  return { query, changeInput, searchEmojis, searchCategory, clearSearch, hasSearched }
}
