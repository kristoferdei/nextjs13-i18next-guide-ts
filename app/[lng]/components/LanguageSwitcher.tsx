'use client'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import { languages } from '@/app/i18n/settings'
import { GB, NL } from 'country-flag-icons/react/3x2'

interface LanguageSwitcherProps {
  lng: string
}

const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = ({ lng }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="relative inline-block mr-6">
      <button
        type="button"
        className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        {lng == 'en' ? <GB title="English" className="w-5 h-5" /> : <NL title="Dutch" className="w-5 h-5" />}
      </button>
      {open && (
        <ul className="absolute z-50 mt-2 rounded-lg bg-slate-800 text-white list-none">
          {languages.map((lng, index) => (
            <Link key={index} href={`/${lng}`}>
              <li className="inline-flex items-center w-full px-3 py-2 cursor-pointer hover:text-blue-800" key={index} onMouseDown={(e) => e.preventDefault()}>
                {lng == 'en' ? (
                  <div className="flex items-center gap-2">
                    <span>
                      <GB title="English" className="w-5 h-5" />
                    </span>
                    <span>{lng.toUpperCase()}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>
                      <NL title="Dutch" className="w-5 h-5" />
                    </span>
                    <span>{lng.toUpperCase()}</span>
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
