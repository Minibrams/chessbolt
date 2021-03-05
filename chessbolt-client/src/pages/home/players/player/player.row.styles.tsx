import { transparentize } from "polished";
import { styled } from "../../../../shared/styles/themes";

const Row = styled.li`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1em 2em;
  margin-top: 1em;
  list-style: none;
  background-color: ${props => props.theme.primaryVariant};
  border-radius: 5px;

  transition: .3s all;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.secondary};
  }
`

const Name = styled.h4`
  text-transform: uppercase;
`

const Elo = styled.h4`
  color: ${props => transparentize(.5, props.theme.onPrimary)};
`

export const PlayerRowStyles = {
  Row,
  Name,
  Elo
}