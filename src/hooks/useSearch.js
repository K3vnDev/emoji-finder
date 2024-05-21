import { useState, useRef } from "react"
import { useEmojis } from "./useEmojis"
import { useData } from "../context/useData"

export function useSearch () {
  const { getEmojisBySearch, getEmojisByCategory, displayAllEmojis } = useEmojis()
  const [query, setQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const lastCategoryIndex = useRef(-1)
  const isSearching = useRef(false)
  const { setErrorMessage } = useData()

  const searchEmojis = (e) => {
    e.preventDefault()
    if (query !== '' && !isSearching.current) {
      isSearching.current = true
      getEmojisBySearch(query)
      .then(() => {
        isSearching.current = false
      })
      setHasSearched(true)
      setQuery('')
      lastCategoryIndex.current = -1
    }
  }
  const searchCategory = (index) => {
    if (lastCategoryIndex.current !== index && !isSearching.current){
      isSearching.current = true
      getEmojisByCategory(index)
      .then(() => {
        isSearching.current = false
      })
      setHasSearched(true)
      lastCategoryIndex.current = index
    }
  }
  const clearSearch = (e) => {
    e.preventDefault()
    if (hasSearched){
      setQuery('')
      displayAllEmojis()
      setHasSearched(false)
      lastCategoryIndex.current = -1
      setErrorMessage('')
    }
  }
  const changeInput = (e) => {
    setQuery(e.target.value)
  }

  return { query, changeInput, searchEmojis, searchCategory, clearSearch, hasSearched }
}
