import { Textarea, Button, Stack, Group, Paper } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { useResumeContext } from '../context/useResumeContext'

export const ResumeEditor = () => {
  const { resumeData, setResumeData } = useResumeContext()
  const { t } = useTranslation()

  const form = useForm({
    initialValues: {
      header: '',
      summary: '',
      skills: '',
      experience: '',
    },
  })

  const applyTemplate = () => {
    form.setValues({
      header: resumeData.header ?? '',
      summary: resumeData.summary ?? '',
      skills: resumeData.skills ?? '',
      experience: resumeData.experience ?? '',
    })
  }

  return (
    <Paper withBorder radius="md" p="lg">
      <form onSubmit={form.onSubmit((values) => setResumeData(values))}>
        <Stack>
          <Textarea
            label={t('accountPage.resume.header')}
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps('header')}
          />

          <Textarea
            label={t('accountPage.resume.summary')}
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps('summary')}
          />

          <Textarea
            label={t('accountPage.resume.skills')}
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps('skills')}
          />

          <Textarea
            label={t('accountPage.resume.experience')}
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps('experience')}
          />
          <Group>
            <Button
              variant="default"
              radius="md"
              size="md"
              type="button"
              onClick={applyTemplate}
            >
              {t('accountPage.resume.template')}
            </Button>
            <Button
              variant="filled"
              color="yellow"
              radius="md"
              size="md"
              type="submit"
            >
              {t('accountPage.resume.preview')}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  )
}
