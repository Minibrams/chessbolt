import React from "react"
import { Button } from "../../components/common/buttons/button"
import { CommonStyles } from "../../components/common/common.styles"
import { GamesCard } from "./games/games.card"
import { HomePageStyles } from "./home.page.styles"
import { PlayersCard } from "./players/players.card"

export const HomePage = () => {

  return (
    <CommonStyles.Page margin='2em'>
      <h1 style={{ textAlign: 'center' }}>Chessbolt</h1>
      <HomePageStyles.CardContainer>
        <HomePageStyles.Card>
          <h1>Games</h1>
          <GamesCard />
        </HomePageStyles.Card>
        <HomePageStyles.Card>
          <h1>Players</h1>
          <PlayersCard />
        </HomePageStyles.Card>
        <HomePageStyles.Card>
          <h1>Progress</h1>
          <Button info>Info</Button>
        </HomePageStyles.Card>
      </HomePageStyles.CardContainer>
    </CommonStyles.Page>
  )
}