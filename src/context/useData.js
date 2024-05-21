import { DataContext } from './data.jsx'
import { useContext } from 'react'

export function useData() {
  const {
    emojis,
    setEmojis,
    copiedMessage,
    showCopiedMessage,
    errorMessage,
    setErrorMessage,
  } = useContext(DataContext)
  return {
    emojis,
    setEmojis,
    copiedMessage,
    showCopiedMessage,
    errorMessage,
    setErrorMessage,
  }
}
