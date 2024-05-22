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