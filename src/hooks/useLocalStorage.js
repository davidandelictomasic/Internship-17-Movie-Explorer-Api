import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  const [stored, setStored] = useState(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stored))
  }, [key, stored])

  return [stored, setStored]
}

export default useLocalStorage
