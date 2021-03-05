import styled from "styled-components"
import { mq } from "../../shared/styles/variables"

type PageProps = {
  margin?: string
}

const Page = styled.section<PageProps>`
  margin: 4em;
  margin-top: ${props => props.theme.variables.header.height};
  height: calc(100vh - ${props => props.theme.variables.header.height});
  ${props => props.margin ? `
    margin: ${props.margin}
  ` : ''}
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  text-align: center;
`

export const CommonStyles = {
  Page
}
