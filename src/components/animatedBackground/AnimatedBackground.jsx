import { useEffect, useState } from 'react'
import './AnimatedBackground.css'

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

export function AnimatedBackground () {
  const [animatedEmojis, setAnimatedEmojis] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {

      const pos = Math.random() * 92
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
          endTime: Date.now() + time * 2000
        }]
      })
    }, 2500)
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div className='animated-background'>
      {
        animatedEmojis.map((animEmoji, index) => {
          if (animEmoji.endTime < Date.now()) return

          return (
            <AnimatedEmoji 
            emoji={animEmoji.emoji}
            time={animEmoji.time}
            pos={animEmoji.pos}
            size={animEmoji.size}
            rotation={animEmoji.rotation}
            key={index}
            />
          )
        })
      }
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function AnimatedEmoji ({ emoji, time, pos, size, rotation }) {
  const style = {
    animation: `emoji-float ${time}s ease-out both`,
    top: `${pos}vh`,
    fontSize: `${size}px`,
    rotate: `${rotation}deg`
  }
  return <span style={style} className='animated-emoji'>{emoji}</span>
}