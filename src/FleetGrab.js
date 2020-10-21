import React from 'react'
import FleetData from './assets/fleetyard'
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
import './assets/scss/fleetGrab.scss'

let placeHolder1 = FleetData

let fleetGrab = (var1) =>{
    return(
        <Grid className='cardGrid'>
            {placeHolder1.map(element => {
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

export default fleetGrab