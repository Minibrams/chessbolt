import React, { ReactNode } from 'react'
import SiteStateProvider from './site/site-state.provider'

type StateWrapperProps = {
  children: ReactNode
}

// Nest the providers for all our states here. 
// The props.children will eventually be our <App/> component
// from which we can then use contexts from each state provider as we wish.
const StateProvider = (props: StateWrapperProps) => {
  return (
      <SiteStateProvider>
        {props.children}
      </SiteStateProvider>
  )
}

export default StateProvider
export const storeState = (state: any, key: string) =>
  localStorage.setItem(key, JSON.stringify(state))