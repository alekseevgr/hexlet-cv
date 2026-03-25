import { useContext } from 'react'
import { AutoApplyContext } from './AutoApplyContext'

export const useAutoApplyContext = () => {
  const context = useContext(AutoApplyContext)

  if (!context) {
    throw new Error('context error')
  }

  return context
}
