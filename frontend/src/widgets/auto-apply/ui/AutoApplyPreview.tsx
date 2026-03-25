import { Stack, Paper, List, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useAutoApplyContext } from '../context/useAutoApplyContext'

export const AutoApplyPreview = () => {
  const { autoApplyData } = useAutoApplyContext()
  const { t } = useTranslation()

  const frequencyLabel = autoApplyData.frequency
    ? t(`accountPage.autoApply.${autoApplyData.frequency}`)
    : t('accountPage.autoApply.notSelected')

  const status = autoApplyData.enabled
    ? t('accountPage.autoApply.enabled')
    : t('accountPage.autoApply.disabled')

  const locations =
    autoApplyData.locations.join('; ') || t('accountPage.autoApply.notSelected')

  const keyWords =
    autoApplyData.keyWords.join('; ') || t('accountPage.autoApply.notSelected')

  return (
    <Paper withBorder radius="md" p="lg">
      <Stack gap="md">
        <Title order={3}>{t('accountPage.autoApply.previewLogic')}</Title>
        <List spacing="xs" size="sm">
          <List.Item>
            {t('accountPage.autoApply.filterByKeywords')}: {keyWords}
          </List.Item>

          <List.Item>
            {t('accountPage.autoApply.citiesFormat')}: {locations}
          </List.Item>

          <List.Item>
            {t('accountPage.autoApply.launchFrequency')}: {frequencyLabel}
          </List.Item>

          <List.Item>
            {t('accountPage.autoApply.status')}: {status}
          </List.Item>
        </List>
      </Stack>
    </Paper>
  )
}
