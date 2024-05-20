import { useState } from "react"

export function useCopiedMessage() {
  const [copiedMessage, setCopiedMessage] = useState(false)

  const showCopiedMessage = () => {
    if (!copiedMessage){
      setCopiedMessage(true)
      setTimeout(() => {
        setCopiedMessage(false)
      }, 2000)
    }
  }
  return { copiedMessage, showCopiedMessage }
}