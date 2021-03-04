
import './App.css';
import { useSite } from '../state/site/site-state.provider';
import { ThemeProvider } from 'styled-components';
import { AppTheme, AppThemes, DarkTheme, LightTheme } from '../shared/styles/themes';
import { GlobalStyle } from '../shared/styles/global-style';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';


const getTheme = (siteTheme: AppThemes): AppTheme => {
  switch (siteTheme) {
    case AppThemes.Dark:
      return DarkTheme
    default: 
      return LightTheme
  }
}

const PlayerPage = () => {
  const { id } = useParams<{id: string}>()
  return (
    <p>Showing player {id}</p>
  )
}

const HomePage = () => {
  return (
    <p>Showing home</p>
  )
}

const App = () => {
  const site = useSite()

  return (
    <ThemeProvider theme={getTheme(site.state.theme)}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/player/:id">
            <PlayerPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
