import { Dayjs } from "dayjs";

export type Game = {
  id: number,
  white_player_name: string
  white_player_id: string
  white_player_elo: string

  black_player_name: string
  black_player_id: string
  black_player_elo: string

  result: string
  time: Dayjs
}