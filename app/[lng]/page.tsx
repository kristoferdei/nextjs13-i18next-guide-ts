import { useTranslation } from '../i18n'
import Card from '@/app/[lng]/components/Card'

export default async function Home({
  params: { lng }
}: {
  params: {
    lng: string
  }
}) {
  const { t } = await useTranslation(lng)

  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl lg:text-5xl font-black">{t('title')}</h1>
      <Card lng={lng} />
    </main>
  )
}
