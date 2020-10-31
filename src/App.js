import React from 'react'
import './App.css'
import FleetDis from './components/FleetDis'
import NavAB from './components/NavAppBar'
import { ShipListContextProvider } from './contexts/ShipListContext'

function App() {
  return (
    <ShipListContextProvider>
      <NavAB/>
        <div className="App">
          <header className="App-header">
            <FleetDis/>
          </header>
        </div>
    </ShipListContextProvider>
  )
}

export default App;
