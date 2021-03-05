import { useEffect, useState } from "react"
import axios, { AxiosResponse } from 'axios'
import { Player } from "../../../models/player"
import { PlayersCardStyles } from "./players.card.styles"
import { PlayerRow } from "./player/player.row"

const getPlayers = async (): Promise<AxiosResponse<Player[]>> => {
  return axios.get('http://localhost:4242/players')
}

export const PlayersCard = () => {
    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
      getPlayers().then(r => setPlayers(r.data.sort((a, b) => b.elo - a.elo)))
    }, [])

    return (
      <PlayersCardStyles.List>
        {players.map(p => (
          <PlayerRow key={p.id} player={p} />
        ))}
      </PlayersCardStyles.List>
    )
}