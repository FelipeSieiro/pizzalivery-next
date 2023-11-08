import styled from "styled-components"
import { ReactComponent as SlicePizza } from "../../assets/pizzalivery.svg"
import { sizes } from "@/app/style/Sizes"
import { colors } from "@/app/style/Colors"


export const ElementLogo = styled.div`
  display: flex;
  align-items: center;
`

export const LogoIcon = styled(SlicePizza)`
  transform: rotate(-40deg);
`

export const LogoText = styled.span`
  font-size: ${sizes.large};
  font-weight: bold;
  color: ${colors.commom.light};
`
