import { useState } from 'react'
import type { TCoverLetterData, TCoverLetterProviderProps } from '../types'
import { CoverLetterContext } from './CoverLetterContext'

export const CoverLetterProvider = ({
  children,
  initialData,
}: TCoverLetterProviderProps) => {
  const [coverLetterData, setCoverLetterData] =
    useState<TCoverLetterData>(initialData)

  return (
    <CoverLetterContext.Provider
      value={{
        coverLetterData,
        setCoverLetterData,
      }}
    >
      {children}
    </CoverLetterContext.Provider>
  )
}
