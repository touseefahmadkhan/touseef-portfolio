import { useEffect, useState } from 'react'

export function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex <= word.length) {
      timeout = setTimeout(() => {
        setText(word.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, speed)
    } else if (!deleting && charIndex > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(word.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return text
}
