import { useContext } from 'react'
import { CoverLetterContext } from './CoverLetterContext'

export const useCoverLetterContext = () => {
  const context = useContext(CoverLetterContext)

  if (!context) {
    throw new Error('context error')
  }

  return context
}
