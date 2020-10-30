import React from 'react'
import {
    Grid, 
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Link
} from '@material-ui/core'
import '../assets/scss/fleetGrab.scss'
import { useShipListContext } from '../contexts/ShipListContext'
// import FleetData from '../assets/fleetyard'

const FleetGrab = () =>{
    console.log('Test')
    const manifest = useShipListContext()

    // const [manifest, setManifest] = useState({
    //     loading: false,
    //     shipList: []
    // })

    // useEffect(() => {
    //     setManifest({
    //         loading: false,
    //         shipList: 
    //     })
    // }, [])

    return(
        <Grid className='cardGrid'>
            {manifest.shipList.map(element => {
                let elAlt = `The ${element.manufacturer.name} ${element.name}`
                let elImg = `${element.storeImageMedium}`
                return(
                    <Card elevation={5} className='shipCard'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={elAlt}
                                image={elImg}
                            />
                            <CardContent>
                                <Typography className='cardHeader' gutterBottom variant="h5" component="h2">
                                    {element.name}
                                </Typography>
                                <Typography className='cardBText' variant='body2' component='p'>
                                    {element.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button><Link href={element.storeUrl} target='_blank' rel='noopener'>Learn More</Link></Button>
                            {element.brochure != null ? <Button><Link href={element.brochure} target='_blank' rel='noopener'>View Brochure</Link></Button> : null}
                        </CardActions>
                    </Card>
                )
            })}
        </Grid>
    )
} 

export default FleetGrab