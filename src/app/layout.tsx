import { Nunito } from 'next/font/google'

import './globals.css'
import Narbar from '@/components/navbar/Narbar'
import Model from '@/components/modals/Modal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* 만약 hydration error 에러가 난다면 ClientOnly 로 감싸줄것 */}
        <Model title="Hello World" actionLabel="Submit" isOpen />
        <Narbar /> {children}
      </body>
    </html>
  )
}
