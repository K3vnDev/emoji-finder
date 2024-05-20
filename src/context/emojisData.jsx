/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const EmojisDataContext = createContext()

export function EmojisDataProvider ({ children }) {
  const [emojis, setEmojis] = useState([])

  return (
    <EmojisDataContext.Provider 
    value={{ emojis, setEmojis }}
    >
      {children}
    </EmojisDataContext.Provider>
  )
}