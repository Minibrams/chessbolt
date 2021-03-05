import { Game } from "../../../../models/game"
import { GameRowStyles } from "./game.row.styles"

type GameRowProps = {
  game: Game
}

export const GameRow = (props: GameRowProps) => {
  return (
    <GameRowStyles.Row>
      <GameRowStyles.White result={props.game.result}>{props.game.white_player_name}</GameRowStyles.White>
      <GameRowStyles.Black result={props.game.result}>{props.game.black_player_name}</GameRowStyles.Black>
    </GameRowStyles.Row>
  )
}
