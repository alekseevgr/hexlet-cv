import { useState } from 'react'
import type { TResumeData, TResumeProviderProps } from '../types'
import { ResumeContext } from './ResumeContext'

export const ResumeProvider = ({
  children,
  initialData,
}: TResumeProviderProps) => {
  const [resumeData, setResumeData] = useState<TResumeData>(initialData)

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}
