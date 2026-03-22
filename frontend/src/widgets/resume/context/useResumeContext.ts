import { useContext } from 'react'
import { ResumeContext } from './ResumeContext'

export const useResumeContext = () => {
  const context = useContext(ResumeContext)

  if (!context) {
    throw new Error('context error')
  }

  return context
}
