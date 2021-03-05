import { styled } from '../../../shared/styles/themes'
import { darken } from 'polished'

type ButtonStyleProps = {
  borderColor: string
  bgColor: string
  color: string
  block?: boolean
  large?: boolean
  outline?: boolean
  inline?: boolean
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.borderColor};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  transition: all 0.2s;
  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `}
  ${props =>
    props.large &&
    `
    padding: 0.8em 1.3em;
    font-size: 1.5em;
    `}
  ${props => props.inline && `padding: 0 1em`};
  &:hover {
    ${props =>
      props.outline &&
      `
      background-color: ${props.color};
      color: ${props.bgColor};
    `}
    ${props =>
      !props.outline &&
      `
      background-color: ${darken(0.1, props.bgColor)};
      border-color: ${darken(0.1, props.borderColor)};
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    `}
  }
  &:active {
    outline: none;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    ${props =>
      props.outline &&
      `
      background-color: ${darken(0.15, props.color)};
      border-color: ${darken(0.15, props.borderColor)};
    `}
    ${props =>
      !props.outline &&
      `
      background-color: ${darken(0.15, props.bgColor)};
      border-color: ${darken(0.15, props.borderColor)};
    `}
  }
  &:focus {
    outline: none;
  }
`

export const ButtonsStyles = {
  Button: ButtonStyle,
}