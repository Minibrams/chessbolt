import { styled } from "../../shared/styles/themes";

const CardContainer = styled.section<{ column?: boolean }>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
`

export const HomePageStyles = {
  CardContainer
}