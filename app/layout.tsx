import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'Flexxible',
  description: 'share and upload your web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Nav />
      <main>
      {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
