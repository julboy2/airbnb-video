import { Nunito } from 'next/font/google'

import './globals.css'
import Narbar from '@/components/navbar/Narbar'
import ToasterProvider from '@/providers/ToasterProvider'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import RentModal from '@/components/modals/RentModal'
import getCurrentUser from '@/actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        {/* 만약 hydration error 에러가 난다면 ClientOnly 로 감싸줄것 */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Narbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  )
}
