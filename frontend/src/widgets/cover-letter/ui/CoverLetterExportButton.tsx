import { Button } from '@mantine/core'
import { useCoverLetterContext } from '../context/useCoverLetterContext'
import { useTranslation } from 'react-i18next'
import { downloadJson } from '@shared/lib/helpers/downloadJson'

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
        coverLetterData && downloadJson(coverLetterData, 'Cover letter')
      }
    >
      {t('accountPage.coverLetter.download')}
    </Button>
  )
}
