import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { ElementMain, LayoutContainer } from "./Layout.style"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <ElementMain>
        <LayoutContainer>{children}</LayoutContainer>
      </ElementMain>
      <Footer />
    </>
  )
}
