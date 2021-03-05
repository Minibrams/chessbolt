import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Game } from "../../../models/game"
import { GamesCardStyles } from "./games.card.styles"
import { GameRow } from "./game/game.row"
import dayjs from "dayjs"

const getGames = async (): Promise<Game[]> => {
  const response = axios.get<Game[]>('http://localhost:4242/games')
  return (await response).data.map(g => ({...g, time: dayjs(g.time)}))
}

export const GamesCard = () => {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
      getGames().then(gs => setGames(gs.sort((a, b) => b.time.unix() - a.time.unix())))
    }, [])

    return (
      <GamesCardStyles.List>
        {games.map(g => (
          <GameRow key={g.id} game={g} />
        ))}
      </GamesCardStyles.List>
    )
}