import { Button } from '@mantine/core'
import { useCoverLetterContext } from '../lib/useCoverLetterContext'
import { downloadCoverLetterJson } from '../lib/downloadCoverLetterJson'
import { useTranslation } from 'react-i18next'

export const CoverLetterExportButton = () => {
  const { coverLetterData } = useCoverLetterContext()
  const { t } = useTranslation()

  return (
    <Button
      variant="filled"
      color="yellow"
      radius="md"
      size="md"
      type="button"
      onClick={() =>
        coverLetterData && downloadCoverLetterJson(coverLetterData)
      }
    >
      {t('accountPage.coverLetter.download')}
    </Button>
  )
}
