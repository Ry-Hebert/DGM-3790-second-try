import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import FleetDis from './components/FleetDis'
import About from './components/About'
import Error from './components/Error'
import NavAB from './components/NavAppBar'
import Favorites from './components/Favorites'
import { ShipListContextProvider } from './contexts/ShipListContext'
import { LoginContextProvider } from './contexts/LoginContext'
import { FavoritesContextProvider } from './contexts/FavoritesContext'

function App() {
  return (
    <LoginContextProvider>
      <FavoritesContextProvider>
        <ShipListContextProvider>
          <NavAB/>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route path='/' component={About} exact />
                <Route path='/shipList' component={FleetDis} />
                <Route path='/favorites' component={Favorites} />
                <Route component={Error} />
              </Switch>
            </header>
          </div>
        </ShipListContextProvider>
      </FavoritesContextProvider>
    </LoginContextProvider>
  )
}

export default App;
