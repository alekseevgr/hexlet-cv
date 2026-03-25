import { useState } from 'react'
import type { TAutoApplyData, TAutoApplyProviderProps } from '../types'
import { AutoApplyContext } from './AutoApplyContext'

export const AutoApplyProvider = ({
  children,
  initialData,
}: TAutoApplyProviderProps) => {
  const [autoApplyData, setAutoApplyData] =
    useState<TAutoApplyData>(initialData)

  return (
    <AutoApplyContext.Provider
      value={{
        autoApplyData,
        setAutoApplyData,
      }}
    >
      {children}
    </AutoApplyContext.Provider>
  )
}
