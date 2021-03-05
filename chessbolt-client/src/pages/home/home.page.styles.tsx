import { styled } from "../../shared/styles/themes";

const CardContainer = styled.section<{ column?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1125px) {
    flex-direction: column;
  }
`

const Card = styled.section`
  background-color: ${props => props.theme.primary};
  margin: 2em auto;
  min-width: 20em;

  @media(max-width: 1125px) {
    min-width: 70vw;
  }
`

export const HomePageStyles = {
  CardContainer,
  Card
}