import React from 'react'
import FleetGrab from './FleetGrab'
import {
    Button
} from '@material-ui/core'
import './assets/scss/fleetGrab.scss'

// const ShipData = val => {
//     if(val === 1){
//         return (
//             ShipList.forEach(element => {
//                 return(
//                 <div className='shipCard'>
//                     <h4>{element.name}</h4>
//                 </div>
//                 )
//             })
//         )
//     }
//     else {
//         return (<div></div>)
//     }
// }

// const shipAPI = axios.create({
//     baseURL: 'https://api.fleetyards.net/v1/ships'
// })

let fleetDis = () => {

        return (
            <main>
                <div>
                    <h1>Star Citizen Ship List</h1>
                    <h2>This App displays a list of ships from the game Star Citizen, which is produced by Roberts Space Industries</h2>
                </div>
                <div className='buttonSpacing'>
                    <Button variant='contained'>Display all Ships</Button>
                    <Button variant='contained'>Display Ships With Brochure</Button>
                </div>
                <div>
                    <FleetGrab></FleetGrab>
                </div>
            </main>
        )
}

export default fleetDis