import { Player } from "../../../../models/player"
import { PlayerRowStyles } from "./player.row.styles"

type PlayerRowProps = {
  player: Player
}

export const PlayerRow = (props: PlayerRowProps) => {
  return (
    <PlayerRowStyles.Row>
      <PlayerRowStyles.Name>
        {props.player.name}
      </PlayerRowStyles.Name>
      <PlayerRowStyles.Elo>
        {props.player.elo.toFixed(0)}
      </PlayerRowStyles.Elo>
    </PlayerRowStyles.Row>
  )
}
