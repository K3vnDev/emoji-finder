/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { useData } from '../context/useData'
const API_KEY = '9d949539a0495e3532b9b46c056e9707c75735a0'

export function useEmojis() {
  const { setEmojis, setErrorMessage } = useData()
  const showingAllEmojis = useRef(true)

  const categories = [
    'smileys-emotion',
    'people-body',
    'animals-nature',
    'food-drink',
    'travel-places',
    'activities',
    'objects',
    'symbols',
    'flags',
  ]

  const updateEmojis = async (url) => {
    setErrorMessage('')
    const res = await fetch(url)
    const data = await res.json()
    
    if (data.status){
      setErrorMessage(data.message)
      return
    }
    
    data.forEach((emoji) => {
      setEmojis((e) => {
        const newEmojis = [...e]
        newEmojis.push(emoji.character)
        return newEmojis
      })
    })
    return
  }

  const getEmojisBySearch = async (query) => {
    setEmojis([])
    showingAllEmojis.current = false
    return await updateEmojis(
      `https://emoji-api.com/emojis?search=${query}&access_key=${API_KEY}`
    )
  }
  const getEmojisByCategory = async (category) => {
    setEmojis([])
    showingAllEmojis.current = false
    return await updateEmojis(
      `https://emoji-api.com/categories/${categories[category]}?access_key=${API_KEY}`
    )
  }
  const loadEmojisByPage = async (page) => {
    return await updateEmojis(
      `https://emoji-api.com/categories/${categories[page]}?access_key=${API_KEY}`
    )
  }

  const displayAllEmojis = () => {
    let currentPage = 0
    let currentlyLoading = false
    loadEmojisByPage(currentPage++)
    showingAllEmojis.current = true
    setEmojis([])

    document.body.onscroll = () => {
      let scroll = window.scrollY
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight

      if (
        scroll / maxScroll > 0.6 &&
        currentPage < categories.length &&
        !currentlyLoading &&
        showingAllEmojis.current
      ) {
        currentlyLoading = true
        loadEmojisByPage(currentPage++).then(() => (currentlyLoading = false))
      }
    }
  }

  useEffect(displayAllEmojis, [])

  return { getEmojisBySearch, getEmojisByCategory, displayAllEmojis }
}
