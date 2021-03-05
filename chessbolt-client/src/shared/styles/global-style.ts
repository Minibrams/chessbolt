import { createGlobalStyle } from 'styled-components'
import { AppTheme } from './themes'
import { transparentize } from 'polished'

type GlobalStyleProps = {
  theme: AppTheme
}

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props: GlobalStyleProps) => props.theme.primary};
    color: ${(props: GlobalStyleProps) => props.theme.onPrimary};
    font-family: 'Ubuntu';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5em;
    transition: 
      color .6s ease-in-out, 
      background-color .6s ease-in-out,
      fill .6s ease-in-out;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    line-height: 1em;
  }
  button {
    border: none;
  }
  hr {
    margin: 1em 4em;
    border-color: ${props => transparentize(0.5, props.theme.primaryVariant)};
  }
  code {
    font-family: 'Ubuntu Mono';
  }
  blockquote {
    padding-left: 1em;
    margin-left: 0;
    border-left: .3em solid ${props => props.theme.primaryVariant};
  }
`