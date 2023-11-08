import styled from "styled-components"

import Link from 'next/link'
import { colors } from "@/app/style/Colors"
import { sizes } from "@/app/style/Sizes"

export const LinkButton = styled(Link)`
  border: 0;
  padding-top: ${sizes.small};
  padding-right: ${sizes.main};
  padding-bottom: ${sizes.small};
  padding-left: ${sizes.main};
  line-height: 1.1;
  border-width: 2px;
  border-style: solid;
  font-size: ${sizes.xsmall};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  border-color: ${colors.primary.main};
  background-color: ${colors.primary.main};
  color: ${colors.commom.light};

  ${(props) =>
    props.inverse &&
    `
    border-color: ${colors.commom.light};
    background-color: transparent;
    color: ${colors.commom.light};
  `}

  &:hover {
    border-color: ${colors.primary.main};
    background-color: transparent;
    color: ${colors.primary.main};
  }

  &:disabled {
    border-color: ${colors.text.dark};
    background-color: transparent;
    color: ${colors.text.dark};
    cursor: not-allowed;
  }
`