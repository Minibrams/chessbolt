
import { useSite } from '../state/site/site-state.provider';
import { ThemeProvider } from 'styled-components';
import { AppTheme, AppThemes, DarkTheme, LightTheme } from '../shared/styles/themes';
import { GlobalStyle } from '../shared/styles/global-style';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/home/home.page';
import { PlayerPage } from '../pages/player/player.page';

const getTheme = (siteTheme: AppThemes): AppTheme => {
  switch (siteTheme) {
    case AppThemes.Dark:
      return DarkTheme
    default: 
      return LightTheme
  }
}

const App = () => {
  const site = useSite()

  return (
    <ThemeProvider theme={getTheme(site.state.theme)}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/players/:id">
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
