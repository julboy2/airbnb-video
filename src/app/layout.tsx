import { Nunito } from 'next/font/google'

import './globals.css'
import Narbar from '@/components/navbar/Narbar'

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
        <Narbar /> {children}
      </body>
    </html>
  )
}
