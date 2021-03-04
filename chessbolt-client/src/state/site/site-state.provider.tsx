import React, { ReactNode, createContext, useState, useContext } from 'react'
import { AppThemes } from '../../shared/styles/themes'
import { storeState } from '../state-wrapper'

const LOCAL_STORAGE_KEY = 'SITE_STATE'

type SiteState = {
  theme: AppThemes
}

const defaultState: SiteState = {
  theme: AppThemes.Light,
}

const storedStateString = localStorage.getItem(LOCAL_STORAGE_KEY)
const storedState: SiteState = storedStateString ? JSON.parse(storedStateString) : defaultState

type SiteStateContextProps = {
  state: SiteState

  changeTheme: (theme: AppThemes) => void
}

type SiteStateProviderProps = {
  children: ReactNode
}

const SiteContext = createContext<SiteStateContextProps>({
  state: storedState,
  changeTheme: (theme) => {},
})

const SiteStateProvider = (props: SiteStateProviderProps) => {
  const [state, setState] = useState<SiteState>(storedState)
  const store = (state: SiteState) => storeState(state, LOCAL_STORAGE_KEY)
  const update = (updated: SiteState) => {
    setState(updated)
    store(updated)
  }

  const changeTheme = (theme: AppThemes) => update({ ...state, theme: theme })

  return (
    <SiteContext.Provider
      value={{
        state: state,
        changeTheme: changeTheme,
      }}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteStateProvider
export const useSite = () => useContext(SiteContext)