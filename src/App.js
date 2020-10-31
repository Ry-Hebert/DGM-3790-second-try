import React from 'react'
import './App.css'
import FleetDis from './components/FleetDis'
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
              <FleetDis/>
            </header>
          </div>
      </ShipListContextProvider>
    </LoginContextProvider>
  )
}

export default App;
