import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import FleetDis from './components/FleetDis'
import About from './components/About'
import Error from './components/Error'
import NavAB from './components/NavAppBar'
import { ShipListContextProvider } from './contexts/ShipListContext'
import { LoginContextProvider } from './contexts/LoginContext'

function App() {
  return (
    <LoginContextProvider>
      <ShipListContextProvider>
        <NavAB/>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path='/' component={About} exact />
              <Route path='/shipList' component={FleetDis} />
              <Route component={Error} />
            </Switch>
          </header>
        </div>
      </ShipListContextProvider>
    </LoginContextProvider>
  )
}

export default App;
