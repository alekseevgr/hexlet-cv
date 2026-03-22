import type { InertiaPage } from '@shared/types/inertia'
import { usePage } from '@inertiajs/react'
import type { PageProps } from '@inertiajs/core'
import { AppLayout } from '../components/AppLayout'
import { useTranslation } from 'react-i18next'
import { PageHeader } from '@widgets/page-header'
import { IconFileText } from '@tabler/icons-react'
import {
  ResumeExportButton,
  ResumeProvider,
  ResumeEditor,
  ResumePreview,
} from '@widgets/resume'
import type { TResumeData } from '@widgets/resume/types'
import { SimpleGrid } from '@mantine/core'

const ResumeInfo: InertiaPage = () => {
  const { t } = useTranslation()
  const { props } = usePage<PageProps & { resume: TResumeData }>()
  return (
    <ResumeProvider initialData={props.resume}>
      <PageHeader
        icon={<IconFileText />}
        title={t('accountPage.resume.title')}
        actionButton={<ResumeExportButton />}
      />
      <SimpleGrid cols={2} spacing="lg">
        <ResumeEditor />
        <ResumePreview />
      </SimpleGrid>
    </ResumeProvider>
  )
}

ResumeInfo.layout = (page) => <AppLayout>{page}</AppLayout>
export default ResumeInfo
