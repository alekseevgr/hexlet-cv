import { createContext } from 'react'
import type { TCoverLetterContextValue } from '../types'

export const CoverLetterContext =
  createContext<TCoverLetterContextValue | null>(null)
