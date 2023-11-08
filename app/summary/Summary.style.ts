import styled from "styled-components"
import { sizes } from "../../styles/Sizes"
import { colors } from "../../styles/Colors"

export const SummaryContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 50vh;
  padding: ${sizes.small} 0;
`
export const SummaryDetails = styled.div``

export const SummaryAmount = styled.div`
  padding: ${sizes.main};
  text-align: right;
`

export const SummaryTitle = styled.p`
  margin-bottom: ${sizes.xsmall};
  font-size: ${sizes.main};
  color: ${colors.text.main};
`

export const SummaryImage = styled.img`
  width: 120px;
  float: left;
  margin: 0 ${sizes.xsmall} 0 0;
`

export const SummaryDescription = styled.p`
  margin-bottom: ${sizes.xxsmall};
  font-size: ${sizes.small};
  color: ${colors.text.dark};
`

export const SummaryPrice = styled.p`
  font-size: ${sizes.main};
  font-weight: 500;
  color: ${colors.text.main};
`
export const SummaryActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${sizes.large} 0;
`
