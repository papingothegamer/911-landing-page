import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${GeistMono.className}`}>{children}</body>
    </html>
  )
}