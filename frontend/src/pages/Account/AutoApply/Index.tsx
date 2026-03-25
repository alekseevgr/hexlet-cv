import type { InertiaPage } from '@shared/types/inertia'
import { AppLayout } from '../components/AppLayout'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '@widgets/page-header'
import { IconRocket } from '@tabler/icons-react'
import { SimpleGrid } from '@mantine/core'
import { usePage } from '@inertiajs/react'
import type { PageProps } from '@inertiajs/core'
import {
  AutoApplyEditor,
  AutoApplyProvider,
  AutoApplyPreview,
  AutoApplyRunButton,
  type TAutoApplyData,
} from '@widgets/auto-apply'

const AutoApplyInfo: InertiaPage = () => {
  const { props } = usePage<PageProps & { autoApply: TAutoApplyData }>()

  const { t } = useTranslation()
  return (
    <AutoApplyProvider initialData={props.autoApply}>
      <PageHeader
        icon={<IconRocket />}
        title={t('accountPage.autoApply.title')}
        actionButton={<AutoApplyRunButton />}
      />
      <SimpleGrid cols={2} spacing="lg">
        <AutoApplyEditor />
        <AutoApplyPreview />
      </SimpleGrid>
    </AutoApplyProvider>
  )
}

AutoApplyInfo.layout = (page) => <AppLayout>{page}</AppLayout>
export default AutoApplyInfo
