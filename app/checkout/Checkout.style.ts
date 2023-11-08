import styled from "styled-components"
import { sizes } from "../../styles/Sizes"
import { colors } from "../../styles/Colors"

export const CheckoutItem = styled.section`
  padding: ${sizes.large} 0;
  border-bottom: 1px solid ${colors.text.main};
  margin-bottom: ${sizes.large};
  & h2 {
    font-size: ${sizes.main};
    color: ${colors.text.main};
  }

  & p {
    color: ${colors.text.dark};
  }
`

export const CheckoutItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PaymentMethodGroup = styled.div`
  & label {
    display: block;
    margin-bottom: ${sizes.xsmall};
    color: ${colors.text.dark};
  }

  & select {
    padding: ${sizes.small} ${sizes.large};
    border: 1px solid ${colors.text.dark};
    font-size: ${sizes.small};
    color: ${colors.text.dark};
  }
`
export const CheckoutAction = styled.div`
  padding: ${sizes.large} 0;
  display: flex;
  justify-content: flex-end;
`
