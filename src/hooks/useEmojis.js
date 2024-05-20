/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useEmojisData } from "../context/useEmojisData";
const API_KEY = '9d949539a0495e3532b9b46c056e9707c75735a0'

export function useEmojis () {
  const { setEmojis } = useEmojisData()

  const categories = [
    'smileys-emotion', 'people-body', 'animals-nature', 'food-drink',
    'travel-places', 'activities', 'objects', 'symbols', 'flags'
  ]

  const updateEmojis = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    data.forEach(emoji => {
      setEmojis(e => {
        const newEmojis = [...e]
        newEmojis.push(emoji.character)
        return newEmojis
      })
    })
    return
  }

  const getEmojisBySearch = async (query) => {
    setEmojis([])
    updateEmojis(`https://emoji-api.com/emojis?search=${query}&access_key=${API_KEY}`)
  }
  const getEmojisByCategory = async (category) => {
    setEmojis([])
    updateEmojis(`https://emoji-api.com/categories/${categories[category]}?access_key=${API_KEY}`)
  }
  const loadEmojisByPage = async (page) => {
    return await updateEmojis(`https://emoji-api.com/categories/${categories[page]}?access_key=${API_KEY}`)
  }
  
  const displayAllEmojis = () => {
    let currentPage = 0
    let currentlyLoading = false
    loadEmojisByPage(currentPage++)
    setEmojis([])

    document.body.onscroll = () => {
      let scroll = window.scrollY
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight

      if (scroll/maxScroll > .6 && currentPage < categories.length && !currentlyLoading){
        currentlyLoading = true
        loadEmojisByPage(currentPage++)
        .then(() => currentlyLoading = false)
      }
    }
  }
  
  useEffect(displayAllEmojis, [])

  return { getEmojisBySearch, getEmojisByCategory, displayAllEmojis }
}