import { styled } from "../../../../shared/styles/themes";

const Row = styled.li`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 2em;

  list-style: none;
  border-radius: 5px;

  transition: .3s all;
`

const Black = styled.h4<{result: string}>`
  margin: 0;
  padding: 1em;
  background-color: ${props => props.theme.black};
  color: ${props => props.result === 'WHITE' ? props.theme.error : props.result === 'BLACK' ? props.theme.success : props.theme.warning};
  width: 50%;
  height: 100%;
  text-transform: uppercase;
`

const White = styled.h4<{result: string}>`
  margin: 0;
  padding: 1em;
  background-color: ${props => props.theme.white};
  color: ${props => props.result === 'BLACK' ? props.theme.error : props.result === 'WHITE' ? props.theme.success : props.theme.warning};
  width: 50%;
  height: 100%;
  text-transform: uppercase;
`

export const GameRowStyles = {
  Row, 
  Black, 
  White
}