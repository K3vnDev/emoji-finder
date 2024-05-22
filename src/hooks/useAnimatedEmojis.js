/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export function useAnimatedEmojis () {
  const [animatedEmojis, setAnimatedEmojis] = useState([])
  
  const emojisList = [
    '😁' , '😅' , '😘' , '😍' , '🥰' , '😇' , '🤨' , '🤫' ,
    '🤔' , '🤐' , '😏' , '🙄' , '😴' , '😵' , '😵‍💫' , '🤓' ,
    '🥶' , '🥵' , '🤯' , '🤠' , '🧐' , '😲' , '🥺' , '😳' ,
    '😢' , '😭' , '🥱' , '😤' , '😡' , '🤬' , '😠' , '😈' ,
    '💀' , '☠️' , '💩' , '🤡' , '👻' , '👾' , '😹' , '😼' ,
    '😻' , '😾' , '🙊' , '💔' , '❤️‍🔥' , '❤️' , '👌' , '🤟' ,
    '👀' , '💃' , '🗣️' , '🐶' , '🐔' , '🌵' , '🍀' , '🌺' ,
    '🍌' , '🍑' , '🍆' , '🥦' , '🥐' , '🥩' , '🥞' , '🍔' ,
    '🍟' , '🍕' , '🌭' , '🍿' , '🦐' , '🍩' , '🍨' , '🍹' ,
    '🍸' , '🍷' , '🌍' , '🌎' , '🗺️' , '🏠' , '🏖️' , '🔥' ,
    '📸' , '📃' , '✂️' , '🗿' , '🎮' , '🪨' , '🦝' , '🦄' ,
    '🐈‍⬛' , '🐓' , '🦜' , '🦋' , '🐌' , '🐝' , '🦢' , '🐧' ,
    '🐍' , '🐘' , '🌼' , '🌃' , '🏙️' , '🌇' , '✈️' , '🛸' ,
    '⛄' , '⏰' , '🌈' , '☔' , '🕹️' , '🪁' , '🪅' , '🧸' ,
    '🥸' , '😎' , '🤒' , '🤧' , '🧀' , '🥨' , '🥕' , '🍫'
  ]
  
  const getRandomEmoji = () => {
    const index = Math.floor(Math.random() * (emojisList.length - 1))
    return emojisList[index]
  }

  const createAnimatedEmoji = () => {
    const pos = Math.random() * 85
    const size = Math.random() * 50 + 120
    const emoji = getRandomEmoji()
    const time = (Math.random() * 4) + 12
    const rot = Math.random() * 10 - 5
  
    setAnimatedEmojis(a => {
      return [...a, {
        emoji: emoji,
        time: time,
        rotation: rot,
        size: size,
        pos: pos,
        endTime: Date.now() + (time * 1000) + 500
      }]
    })
  }

  useEffect(() => {
    createAnimatedEmoji()
    const interval = setInterval(createAnimatedEmoji, 2500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return { animatedEmojis }
}