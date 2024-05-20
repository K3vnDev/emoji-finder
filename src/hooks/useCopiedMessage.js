import { useState } from "react"

export function useCopiedMessage() {
  const [copiedMessage, setCopiedMessage] = useState('')

  const showCopiedMessage = (emoji) => {
    if (copiedMessage === ''){
      setCopiedMessage(`${emoji} Copied to Clipboard!`)
      setTimeout(() => {
        setCopiedMessage('')
      }, 2000)
    }
  }
  return { copiedMessage, showCopiedMessage }
}