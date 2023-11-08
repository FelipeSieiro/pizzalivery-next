import { ElementTitle } from "./Title.style"

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
  variant?: string
}

export const Title = ({ children, variant = "h1", ...rest }: TitleProps) => {
  return (
    <ElementTitle as={variant} {...rest}>
      {children}
    </ElementTitle>
  )
}
