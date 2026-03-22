import { createContext } from 'react'
import type { TResumeContextValue } from '../types'

export const ResumeContext = createContext<TResumeContextValue | null>(null)
