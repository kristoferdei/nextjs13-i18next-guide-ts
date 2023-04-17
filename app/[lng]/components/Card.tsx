'use client'
import { FunctionComponent } from 'react'
import { useTranslation } from '@/app/i18n/client'
import Image from 'next/image'
import TranslationImage from '../../../public/translation.png'

interface CardProps {
  lng: string
}

const Card: FunctionComponent<CardProps> = ({ lng }) => {
  const { t } = useTranslation(lng)

  return (
    <div className="w-3/4 lg:w-1/2 rounded-lg border shadow-md border-gray-700 my-10 transition duration-300">
      <div className="p-20">
        <Image src={TranslationImage} alt="translation" width={400} height={200} />
      </div>
      <div className="rounded-b-lg p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{t('title')}</h5>
        <p className="mb-3 font-normal text-gray-400">{t('description')}</p>
        <button className="inline-flex items-center py-2 px-3 text-sm text-white font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
          {t('button')}
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Card
