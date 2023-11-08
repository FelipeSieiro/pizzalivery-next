

import { LinkButton } from "../LinkButton/LinkButton"
import { Logo } from "../logo/Logo"
import { ElementHeader, HeaderContainer } from "./Header.style"
import Image from 'next/image'

export const Header = () => {
  return (
    <ElementHeader>
      <HeaderContainer>
      <Image
      src="../../assets/pizzalivery.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        <LinkButton href="../../login/Login.tsx">Login</LinkButton>
      </HeaderContainer>
    </ElementHeader>
  )
}