import type { TCoverLetterData } from '../types'

export const downloadCoverLetterJson = (previewData: TCoverLetterData) => {
  const jsonString = JSON.stringify(previewData, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const sanitizedFileName =
    previewData.header?.replace(/[\\/:*?"<>|]/g, '').trim() || 'cover-letter'

  const link = document.createElement('a')
  link.href = url
  link.download = `${sanitizedFileName}.json`
  link.click()

  URL.revokeObjectURL(url)
}
