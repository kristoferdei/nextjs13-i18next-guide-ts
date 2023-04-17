import { FunctionComponent, ReactNode } from 'react'
import Header from '@/app/[lng]/components/Header'
import Footer from '@/app/[lng]/components/Footer'

interface LayoutBaseProps {
  children: ReactNode
  lng: string
}

const LayoutBase: FunctionComponent<LayoutBaseProps> = ({ children, lng }) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-800">
      <Header lng={lng} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutBase
