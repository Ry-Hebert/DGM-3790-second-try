import React, { Component } from 'react'
import axios from 'axios'
import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
} from '@material-ui/core'
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

const shipAPI = axios.create({
    baseURL: 'https://api.fleetyards.net/v1/ships'
})

let fleetDis = () => {

        return (
            <main>
                <div>
                    <h1>Star Citizen Ship List</h1>
                    <h2>This App displays a list of ships from the game Star Citizen, which is produced by Roberts Space Industries</h2>
                </div>
                <div>
                    <button >Display all Ships</button>
                    <button >Display Ships With Brochure</button>
                </div>
                <div>
                    {/* <ShipData val={disTog}></ShipData> */}
                </div>
            </main>
        )
}

export default fleetDis