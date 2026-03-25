import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export const AutoApplyRunButton = () => {
  const { t } = useTranslation()

  return (
    <Button
      variant="filled"
      color="yellow"
      radius="md"
      size="md"
      type="button"
      onClick={() => alert('бот запущен')}
    >
      {t('accountPage.autoApply.run')}
    </Button>
  )
}
