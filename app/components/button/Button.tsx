import { ElementButton } from "./Button.style"

interface ButtonProps {
  children: React.ReactNode
  inverse?: string
  link?: string
  onClick: React.ReactEventHandler
}

export const Button = ({
  children,
  inverse,
  link,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ElementButton inverse={inverse} link={link} onClick={onClick} {...rest}>
      {children}
    </ElementButton>
  )
}
