import { useParams } from "react-router-dom"
import { CommonStyles } from "../../components/common/common.styles"
import { HomePageStyles } from "./player.page.styles"

export const PlayerPage = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <CommonStyles.Page margin='2em'>
      <h1>Hello player {id}!</h1>
      <HomePageStyles.CardContainer>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </HomePageStyles.CardContainer>
    </CommonStyles.Page>
  )
}