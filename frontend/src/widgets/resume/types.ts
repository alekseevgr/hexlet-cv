import { type ReactNode } from 'react'

export type TResumeData = {
  header: string
  summary: string
  skills: string
  experience: string
}

export type ResumeProps = {
  onPreview: (value: TResumeData) => void
  previewData: TResumeData | null
}
export type TResumeProps = {
  onPreview: (value: TResumeData) => void
}
export type TResumeContextValue = {
  resumeData: TResumeData
  setResumeData: (data: TResumeData) => void
}
export type TResumeProviderProps = {
  children: ReactNode
  initialData: TResumeData
}
