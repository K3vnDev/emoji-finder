import { EmojisDataContext } from './emojisData.jsx'
import { useContext } from 'react'

export function useEmojisData() {
  const { emojis, setEmojis } = useContext(EmojisDataContext)
  return { emojis, setEmojis }
}