import { createContext } from 'react'
import type { TAutoApplyContextValue } from '../types'

export const AutoApplyContext = createContext<TAutoApplyContextValue | null>(
  null,
)
