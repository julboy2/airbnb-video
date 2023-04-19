import { Nunito } from 'next/font/google'

import './globals.css'
import Narbar from '@/components/navbar/Narbar'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from '@/providers/ToasterProvider'
import LoginModal from '@/components/modals/LoginModal'
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
        <Narbar currentUser={currentUser} /> {children}
      </body>
    </html>
  )
}
