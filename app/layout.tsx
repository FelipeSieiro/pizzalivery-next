
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { ElementMain, LayoutContainer } from './components/layout/Layout.style'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ElementMain>
          <LayoutContainer>{children}</LayoutContainer>
        </ElementMain>
        <Footer />
      </body>
    </html>
  )
}
