import { useData } from "../context/useData"

export function CopiedMessage () {
  const { copiedMessage } = useData()
  if (copiedMessage === '') return

  return (
    <div className='copied-message'>
      {copiedMessage}
    </div>
  )
}