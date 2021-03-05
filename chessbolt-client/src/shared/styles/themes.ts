import baseStyled, { ThemedStyledInterface } from 'styled-components'
import { DefaultVariables, ThemeVariables } from './variables'
import { transparentize } from 'polished'

export type AppTheme = {
    // General settings (heights, paddings, etc)
    variables: ThemeVariables

    // General colors
    primary: string
    primaryInverse: string
    primaryVariant: string
    onPrimary: string

    secondary: string
    secondaryVariant: string
    onSecondary: string

    accent: string
    onAccent: string

    code: string
    codeBg: string

    // Colors for buttons, alerts, etc.
    success: string
    onSuccess: string

    info: string
    onInfo: string

    warning: string
    onWarning: string

    error: string
    onError: string

    default: string
    onDefault: string

    // Chess colors
    white: string
    black: string
    onWhite: string
    onBlack: string

    // Text
    mute: (val: string) => string
    fluid: (property: string, minValue: number, maxValue: number) => string
}

const displayWide = 1920
const displayNarrow = 375

// Fluidly lerp the font-size according to the screen size
const fluid = (property: string, minValue: number, maxValue: number) => {
  const x = (maxValue - minValue) / (displayWide - displayNarrow)
  const y = maxValue - displayWide * x

  return `${property}: calc(${100 * x}vw + ${y}px);`
}

export const LightTheme: AppTheme = {
    variables: DefaultVariables,

    primary: 'white',
    primaryInverse: '#262322',
    primaryVariant: '#f3f3f3',
    onPrimary: 'black',

    secondary: '#B2E6D4',
    secondaryVariant: '#689689',
    onSecondary: 'black',

    accent: '#A40E4C',
    onAccent: 'white',

    codeBg: '#504136',
    code: 'white',

    // Colors for buttons, alerts, etc.
    success: '#8ED081',
    onSuccess: 'white',

    info: '#52D1DC',
    onInfo: 'white',

    warning: '#E3D26F',
    onWarning: 'black',

    error: '#DE1A1A', // or #942911
    onError: 'white',

    default: 'black',
    onDefault: 'white',

    // Chess colors
    white: '#f3f3f3',
    black: '#262322',
    onWhite: '#262322',
    onBlack: '#f3f3f3',

    mute: (val: string) => transparentize(0.5, val),
    fluid: fluid
}

export const DarkTheme: AppTheme = {
    variables: DefaultVariables,

    primary: '#262322',
    primaryInverse: 'white',
    primaryVariant: '#1e1d1c',
    onPrimary: 'white',

    secondary: '#A40E4C',
    secondaryVariant: '#461220',
    onSecondary: 'white',

    accent: '#B2E6D4',
    onAccent: 'black',

    codeBg: '#504136',
    code: 'white',

    // Colors for buttons, alerts, etc.
    success: '#8ED081',
    onSuccess: 'white',

    info: '#52D1DC',
    onInfo: 'white',

    warning: '#E3D26F',
    onWarning: 'black',

    error: '#DE1A1A', // or #942911
    onError: 'white',

    default: 'black',
    onDefault: 'white',

    // Chess colors
    white: '#f3f3f3',
    black: '#262322',
    onWhite: '#262322',
    onBlack: '#f3f3f3',

    mute: (val: string) => transparentize(0.5, val),
    fluid: fluid
}

export const styled = baseStyled as ThemedStyledInterface<AppTheme>

export enum AppThemes {
    Light,
    Dark,
}