import React from 'react'
import FleetGrab from './FleetGrab'
import {
    Button
} from '@material-ui/core'
import '../assets/scss/fleetGrab.scss'
import { useLoginContext } from '../contexts/LoginContext';

let FleetDis = () => {
    const loginCtx = useLoginContext()

        return (
            <main>
                { !loginCtx.isAuth ? (
                    <div>
                        <h1>Content Restricted</h1>
                        <h2>Please create an account to view content</h2>
                    </div>) : 
                    (
                    <div>
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
                    </div>
                    )
                }
            </main>
        )
}

export default FleetDis