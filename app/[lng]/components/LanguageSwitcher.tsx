'use client'
import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import { languages } from '@/app/i18n/settings'

interface LanguageSwitcherProps {
  lng: string
}
const Footer: FunctionComponent<LanguageSwitcherProps> = ({ lng }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="relative inline-block mt-4">
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 rounded-lg focus:outline-none bg-blue-800"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        {lng}
      </button>
      {open && (
        <ul className="absolute z-50 w-full mt-2 rounded-lg bg-white text-black list-none">
          {languages.map((lng, index) => (
            <Link key={index} href={`/${lng}`}>
              <li className="inline-flex items-center w-full px-3 py-2 cursor-pointer hover:text-blue-800" key={index} onMouseDown={(e) => e.preventDefault()}>
                <span className="font-bold leading-normal">{lng}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Footer
