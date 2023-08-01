'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import AppContext from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitchat',
  description: 'A chatting application that connects people who have accounts in sociala',
  keywords:"chat, chatting, twit, twittify, sociala, social, twitchat"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppContext>
      <html lang="en">
        <body className={inter.className}>
          {children}</body>
      </html>
   </AppContext>
  )
}
