import { Textarea, Button, Stack, Group, Paper } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { useCoverLetterContext } from '../context/useCoverLetterContext'

export const CoverLetterEditor = () => {
  const { coverLetterData, setCoverLetterData } = useCoverLetterContext()
  const { t } = useTranslation()

  const form = useForm({
    initialValues: {
      header: '',
      textLetter: '',
    },
  })

  const applyTemplate = () => {
    form.setValues({
      header: coverLetterData.header ?? '',
      textLetter: coverLetterData.textLetter ?? '',
    })
  }

  return (
    <Paper withBorder radius="md" p="lg">
      <form onSubmit={form.onSubmit((values) => setCoverLetterData(values))}>
        <Stack>
          <Textarea
            label={t('accountPage.coverLetter.header')}
            autosize
            radius="lg"
            {...form.getInputProps('header')}
          />

          <Textarea
            label={t('accountPage.coverLetter.textLetter')}
            autosize
            minRows={2}
            maxRows={8}
            {...form.getInputProps('textLetter')}
            radius="lg"
            styles={{
              input: {
                paddingRight: '60px',
              },
            }}
          />
          <Group>
            <Button
              variant="default"
              radius="md"
              size="md"
              type="button"
              onClick={applyTemplate}
            >
              {t('accountPage.coverLetter.template')}
            </Button>
            <Button
              variant="filled"
              color="yellow"
              radius="md"
              size="md"
              type="submit"
            >
              {t('accountPage.coverLetter.preview')}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  )
}
