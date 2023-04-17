'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import LanguageSwitcher from '@/app/[lng]/components/LanguageSwitcher'
import { useTranslation } from '@/app/i18n/client'

interface HeaderProps {
  lng: string
}

const Header: FunctionComponent<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng)

  const [active, setActive] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <header
      className={`sticky z-40 top-0 flex items-center justify-between flex-wrap text-white p-6 ${
        active ? 'backdrop-blur border-b-2 bg-dark-800/75 border-dark-700' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center flex-no-shrink mr-6">
        <span className="font-semibold text-xl tracking-tight">{t('heading')}</span>
      </div>
      <nav>
        <ul className="flex flex-row items-center gap-4">
          <li>
            <LanguageSwitcher lng={lng} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
