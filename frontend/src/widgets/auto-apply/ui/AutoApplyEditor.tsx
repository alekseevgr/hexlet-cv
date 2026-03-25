import {
  Button,
  Stack,
  Group,
  Paper,
  Checkbox,
  Select,
  TagsInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { useAutoApplyContext } from '../context/useAutoApplyContext'

export const AutoApplyEditor = () => {
  const { autoApplyData, setAutoApplyData } = useAutoApplyContext()
  const { t } = useTranslation()

  const form = useForm({
    initialValues: {
      enabled: autoApplyData.enabled,
      keyWords: autoApplyData.keyWords,
      locations: autoApplyData.locations,
      frequency: autoApplyData.frequency,
    },
  })
  const frequencyOptions = [
    { value: 'everyDay', label: t('accountPage.autoApply.everyDay') },
    { value: 'everyWeek', label: t('accountPage.autoApply.everyWeek') },
    { value: 'everyTwoWeek', label: t('accountPage.autoApply.everyTwoWeek') },
    { value: 'everyMonth', label: t('accountPage.autoApply.everyMonth') },
  ]
  const clearForm = () => {
    form.setValues({
      enabled: false,
      keyWords: [],
      locations: [],
      frequency: null,
    })
  }

  return (
    <Paper withBorder radius="md" p="lg">
      <form onSubmit={form.onSubmit((values) => setAutoApplyData(values))}>
        <Stack>
          <Checkbox
            checked={form.values.enabled}
            onChange={(event) =>
              form.setFieldValue('enabled', event.currentTarget.checked)
            }
            label={t('accountPage.autoApply.enableApply')}
            color="gray"
            radius="md"
          />
          <TagsInput
            label={t('accountPage.autoApply.keyWords')}
            value={form.values.keyWords}
            radius="lg"
            onChange={(value) => form.setFieldValue('keyWords', value)}
          />
          <TagsInput
            label={t('accountPage.autoApply.locations')}
            value={form.values.locations}
            radius="lg"
            onChange={(value) => form.setFieldValue('locations', value)}
          />

          <Select
            label={t('accountPage.autoApply.frequency')}
            onChange={(value) => form.setFieldValue('frequency', value)}
            data={frequencyOptions}
            value={form.values.frequency}
          />

          <Group>
            <Button
              variant="default"
              radius="md"
              size="md"
              type="button"
              onClick={clearForm}
            >
              {t('accountPage.autoApply.reset')}
            </Button>
            <Button
              variant="filled"
              color="yellow"
              radius="md"
              size="md"
              type="submit"
            >
              {t('accountPage.autoApply.showConfig')}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  )
}
