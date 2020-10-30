import React from 'react'
import './App.css'
import FleetDis from './components/FleetDis'
import { ShipListContextProvider } from './contexts/ShipListContext'

function App() {
  return (
    <ShipListContextProvider>
      <div className="App">
        <header className="App-header">
          <FleetDis/>
        </header>
      </div>
    </ShipListContextProvider>
  )
}

export default App;
