import styled from "styled-components"
import { sizes } from "../style/Sizes"
import { colors } from "../style/Colors"


export const FlavourContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 50vh;
  padding: ${sizes.small} 0;
`
export const FlavourCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${sizes.small} ${sizes.small} ${sizes.main} ${sizes.small};
  margin-bottom: ${sizes.large};
  border-width: 2px;
  border-style: solid;
  border-color: ${colors.secondary.light};
  color: ${colors.text.main};
  &:hover {
    border-color: ${colors.text.main};
  }

  ${(props) =>
    props.selected &&
    `
    border-color: ${colors.text.main};
  `}
`

export const FlavourCardImage = styled.img`
  width: 260px;
`
export const FlavourCardTitle = styled.p`
  padding: ${sizes.small} 0 ${sizes.xsmall} 0;
  text-align: center;
  font-size: ${sizes.main};
  color: ${colors.text.main};
`
export const FlavourCardDescription = styled.p`
  min-height: 156px;
  padding: ${sizes.xsmall} 0;
  text-align: center;
  font-size: ${sizes.small};
  color: ${colors.text.dark};
`
export const FlavourCardPrice = styled.p`
  padding: ${sizes.xsmall} 0;
  font-size: ${sizes.main};
  font-weight: 500;
  color: ${colors.text.main};
`

export const FlavourActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${sizes.large} 0;
`
