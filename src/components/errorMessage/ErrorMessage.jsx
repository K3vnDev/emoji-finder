import { useState } from 'react'
import './ErrorMessage.css'

// eslint-disable-next-line react/prop-types
export function ErrorMessage({ msg }) {
  const [className, setClassName] = useState('error-message-wrapper')

  const handleClick = () => {
    setClassName('error-message-wrapper hidden')
  }

  return (
    <div className={className}>
      <span>{msg}</span>
      <button onClick={handleClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='#e8eaed'
        >
          <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
        </svg>
      </button>
    </div>
  )
}
