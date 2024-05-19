/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
const API_KEY = '9d949539a0495e3532b9b46c056e9707c75735a0'

export function useEmojis () {
  const [emojis, setEmojis] = useState([])
  const displayAll = useRef(true)

  const categories = [
    'smileys-emotion', 'people-body', 'animals-nature', 'food-drink',
    'travel-places', 'activities', 'objects', 'symbols', 'flags'
  ]

  const getEmojisBySearch = async (query) => {
    const res = await fetch(`https://emoji-api.com/emojis?search=${query}&access_key=${API_KEY}`)
    const data = await res.json()
    setEmojis([])
    displayAll.current = false

    data?.forEach(emoji => {
      setEmojis(e => {
        const newEmojis = [...e]
        newEmojis.push(emoji.character)
        return newEmojis
      })
    })
  }

  const getEmojisByCategory = async (category) => {
    const res = await fetch(`https://emoji-api.com/categories/${categories[category]}?access_key=${API_KEY}`)
    const data = await res.json()
    setEmojis([])
    displayAll.current = false

    data?.forEach(emoji => {
      setEmojis(e => {
        const newEmojis = [...e]
        newEmojis.push(emoji.character)
        return newEmojis
      })
    })
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
  
  const loadEmojisByPage = async (page) => {
    const res = await fetch(`https://emoji-api.com/categories/${categories[page]}?access_key=${API_KEY}`)
    const data = await res.json()
    
    data?.forEach(emoji => {
      setEmojis(e => {
        const newEmojis = [...e]
        newEmojis.push(emoji.character)
        return newEmojis
      })
    })
    console.log(categories[page]);
    return
  }

  useEffect(displayAllEmojis, [])

  return { emojis, getEmojisBySearch, getEmojisByCategory, displayAllEmojis }
}