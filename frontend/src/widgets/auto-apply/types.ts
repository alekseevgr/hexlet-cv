import { type ReactNode } from 'react'
export type TAutoApplyData = {
  enabled: boolean
  keyWords: string[]
  locations: string[]
  frequency: string | null
}

export type TAutoApplyProps = {
  onPreview: (value: TAutoApplyData) => void
}
export type TAutoApplyContextValue = {
  autoApplyData: TAutoApplyData
  setAutoApplyData: (data: TAutoApplyData) => void
}
export type TAutoApplyProviderProps = {
  children: ReactNode
  initialData: TAutoApplyData
}
