export const downloadJson = <T>(data: T, fileName = 'data') => {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const sanitizedFileName = fileName.replace(/[\\/:*?"<>|]/g, '').trim()

  const link = document.createElement('a')
  link.href = url
  link.download = `${sanitizedFileName || 'data'}.json`
  link.click()

  URL.revokeObjectURL(url)
}
