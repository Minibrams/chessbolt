import React, { ReactNode } from 'react'
import { AppTheme } from '../../../shared/styles/themes'
import { withTheme } from 'styled-components'
import { ButtonsStyles as S } from './button.styles'

type ButtonProps = {
  secondary?: boolean
  accent?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  large?: boolean
  outline?: boolean
  block?: boolean
  inline?: boolean
  children: ReactNode
  theme: AppTheme
  onClick?: () => void
}

const getBorderColor = (props: ButtonProps) => {
  if (props.info) {
    return props.theme.info
  } else if (props.success) {
    return props.theme.success
  } else if (props.warning) {
    return props.theme.warning
  } else if (props.accent) {
    return props.theme.accent
  } else if (props.error) {
    return props.theme.error
  } else if (props.secondary) {
    return props.theme.secondary
  } else {
    return props.theme.onPrimary
  }
}

const getBackgroundColor = (props: ButtonProps) => {
  if (props.outline) {
    return props.theme.primary
  } else if (props.info) {
    return props.theme.info
  } else if (props.success) {
    return props.theme.success
  } else if (props.warning) {
    return props.theme.warning
  } else if (props.accent) {
    return props.theme.accent
  } else if (props.error) {
    return props.theme.error
  } else if (props.secondary) {
    return props.theme.secondary
  } else {
    return props.theme.primary
  }
}

const getColor = (props: ButtonProps) => {
  if (props.outline) {
    if (props.info) {
      return props.theme.info
    } else if (props.success) {
      return props.theme.success
    } else if (props.warning) {
      return props.theme.warning
    } else if (props.accent) {
      return props.theme.accent
    } else if (props.error) {
      return props.theme.error
    } else if (props.secondary) {
      return props.theme.secondary
    } else {
      return props.theme.onPrimary
    }
  } else {
    if (props.info) {
      return props.theme.onInfo
    } else if (props.success) {
      return props.theme.onSuccess
    } else if (props.warning) {
      return props.theme.onWarning
    } else if (props.accent) {
      return props.theme.onAccent
    } else if (props.error) {
      return props.theme.onError
    } else if (props.secondary) {
      return props.theme.onSecondary
    } else {
      return props.theme.onPrimary
    }
  }
}

// Wrap in withTheme() to have access to the current theme vars through props.theme
export const Button = withTheme((props: ButtonProps) => {
  const borderColor = getBorderColor(props)
  const bgColor = getBackgroundColor(props)
  const color = getColor(props)

  return (
    <S.Button
      onClick={props.onClick}
      color={color}
      borderColor={borderColor}
      bgColor={bgColor}
      block={props.block}
      large={props.large}
      inline={props.inline}
      outline={color === props.theme.onPrimary ? false : props.outline}>
      {props.children}
    </S.Button>
  )
})
