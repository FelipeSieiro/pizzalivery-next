import styled from "styled-components"
import { sizes } from "../../styles/Sizes"
import { colors } from "../../styles/Colors"

export const RadioCard = styled.div`
  position: relative;
  width: 30%;

  & label {
    display: inherit;
    width: 100%;
    padding: ${sizes.xlarge} ${sizes.main};
    border-width: 2px;
    border-style: solid;
    border-color: ${colors.secondary.light};
    text-align: center;
    font-size: ${sizes.small};
    color: ${colors.text.main};
    cursor: pointer;
    & span {
      display: block;
      font-size: ${sizes.xsmall};
      color: ${colors.text.dark};
    }
    &:hover {
      border-color: ${colors.text.main};
    }
  }

  & input[type="radio"] {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }

  & input[type="radio"]:checked ~ label {
    border-color: ${colors.text.main};
  }
`
export const SizeContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50vh;
`
export const SizeActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${sizes.main} 0;
`
