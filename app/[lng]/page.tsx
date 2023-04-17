import { useTranslation } from '../i18n'
import LanguageSwitcher from '@/app/[lng]/components/LanguageSwitcher'

export default async function Home({
  params: { lng }
}: {
  params: {
    lng: string
  }
}) {
  const { t } = await useTranslation(lng)

  return (
    <main>
      <LanguageSwitcher lng={lng} />
      <h1>{t('title')}</h1>
    </main>
  )
}
