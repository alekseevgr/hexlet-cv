import { Stack, Paper, Text, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useResumeContext } from '../context/useResumeContext'

export const ResumePreview = () => {
  const { resumeData } = useResumeContext()
  const { t } = useTranslation()

  return (
    <Paper withBorder radius="md" p="lg">
      <Stack gap="md">
        <Title order={3}>{t('accountPage.resume.preview')}</Title>
        <Text c="dimmed">{resumeData?.header}</Text>

        <Text>{resumeData?.summary}</Text>

        <Text>
          <Text span c="dimmed">
            {t('accountPage.resume.skills')}:
          </Text>{' '}
          {resumeData?.skills}
        </Text>

        <Text>
          <Text span c="dimmed">
            {t('accountPage.resume.experience')}:
          </Text>{' '}
          {resumeData?.experience}
        </Text>
      </Stack>
    </Paper>
  )
}
