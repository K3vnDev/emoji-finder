/* eslint-disable react/prop-types */
import { useAnimatedEmojis } from '../../hooks/useAnimatedEmojis'
import './AnimatedBackground.css'


export function AnimatedBackground () {
  const { animatedEmojis } = useAnimatedEmojis()

  return (
    <div className='animated-background'>
      {
        animatedEmojis.map((animEmoji, index) => {
          if (animEmoji.endTime < Date.now()) return

          return (
            <AnimatedEmoji 
            animEmoji={animEmoji}
            key={index}
            />
          )
        })
      }
    </div>
  )
}

function AnimatedEmoji ({ animEmoji }) {
  const { emoji, time, pos, size, rotation } = animEmoji

  return (
    <span 
    className='animated-emoji'
      style={{
        animation: `emoji-float ${time}s ease-out both`,
        top: `${pos}vh`,
        fontSize: `${size}px`,
        rotate: `${rotation}deg`
      }} 
    >{emoji}
    </span>
  ) 
}