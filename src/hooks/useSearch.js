import { useState, useRef } from "react"
import { useEmojis } from "./useEmojis"

export function useSearch () {
  const { getEmojisBySearch, getEmojisByCategory, displayAllEmojis } = useEmojis()
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const lastCategoryIndex = useRef(-1)

  const searchEmojis = (e) => {
    e.preventDefault()
    if (query !== '') {
      getEmojisBySearch(query)
      setHasSearched(true)
      setQuery('')
      lastCategoryIndex.current = -1
    }
  }
  const clearSearch = (e) => {
    e.preventDefault()
    if (hasSearched){
      setQuery('')
      displayAllEmojis()
      setHasSearched(false)
      lastCategoryIndex.current = -1
    }
  }
  const searchCategory = (index) => {
    if (lastCategoryIndex.current !== index){
      getEmojisByCategory(index)
      setHasSearched(true)
      lastCategoryIndex.current = index
    }
  }
  const changeInput = (e) => {
    setQuery(e.target.value)
  }

  return { query, changeInput, searchEmojis, searchCategory, clearSearch, hasSearched }
}
