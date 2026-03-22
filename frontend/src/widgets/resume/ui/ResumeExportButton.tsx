import { Button } from '@mantine/core'
import { useResumeContext } from '../context/useResumeContext'
import { downloadJson } from '@shared/lib/helpers/downloadJson'
import { useTranslation } from 'react-i18next'

export const ResumeExportButton = () => {
  const { resumeData } = useResumeContext()
  const { t } = useTranslation()

  return (
    <Button
      variant="filled"
      color="yellow"
      radius="md"
      size="md"
      type="button"
      onClick={() => resumeData && downloadJson(resumeData, 'resume')}
    >
      {t('accountPage.resume.download')}
    </Button>
  )
}
