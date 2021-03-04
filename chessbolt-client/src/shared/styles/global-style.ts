import { createGlobalStyle } from 'styled-components'
import { AppTheme } from './themes'
import { transparentize } from 'polished'
import { mq } from './variables'

type GlobalStyleProps = {
    theme: AppTheme
}

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap');
    * {
        margin: 0; 
        padding: 0;
    }
    body {
        background-color: ${(props: GlobalStyleProps) => props.theme.primary};
        color: ${(props: GlobalStyleProps) => props.theme.onPrimary};
        @media ${mq.isDesktopOrLaptop} {
            font-size: 1.3em;
        }
        @media ${mq.isTabletOrMobile}, ${mq.isPortrait} {
            font-size: .8em;
        }
        font-family: 'Ubuntu';
        line-height: 1.5em;
        transition: 
            color .3s ease-in-out, 
            background-color .3s ease-in-out,
            fill .3s ease-in-out;
        overflow-x: hidden;
    }
    hr {
        margin: 1em 0;
        border-color: ${props =>
            transparentize(0.5, props.theme.primaryVariant)};
    }
    h1, h2, h3 {
        margin-bottom: 1.5em;
    }
    code {
        font-family: 'Ubuntu Mono';
    }
`