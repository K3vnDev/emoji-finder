/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const DataContext = createContext()

export function DataProvider ({ children }) {
  const [emojis, setEmojis] = useState([])
  const [copiedMessage, setCopiedMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const showCopiedMessage = (emoji) => {
    if (copiedMessage === ''){
      setCopiedMessage(`${emoji} Copied to Clipboard!`)
      setTimeout(() => {
        setCopiedMessage('')
      }, 2000)
    }
  }

  return (
    <DataContext.Provider 
    value={{ 
      emojis, setEmojis, copiedMessage, showCopiedMessage, errorMessage, setErrorMessage
    }}
    >
      {children}
    </DataContext.Provider>
  )
}