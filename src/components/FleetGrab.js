import React from 'react'
import clsx from 'clsx'
import {
    Grid, 
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Link,
    Collapse,
    IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import '../assets/scss/fleetGrab.scss'
import { useShipListContext } from '../contexts/ShipListContext'

const useStyles = makeStyles((theme) => ({
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

const FleetGrab = () =>{
    console.log('Test')
    const manifest = useShipListContext()
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (i) => {
        setExpanded({...expanded, [i]: !expanded[i]})
    }

    return(
        <Grid className='cardGrid'>
            {manifest.shipList.map((element, i) => {
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
                                    {/* {element.description} */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button><Link href={element.storeUrl} target='_blank' rel='noopener'>Learn More</Link></Button>
                            {element.brochure != null ? <Button><Link href={element.brochure} target='_blank' rel='noopener'>View Brochure</Link></Button> : null}
                            <IconButton className='card-right' aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton className={clsx(classes.expand[i], {[classes.expandOpen]: expanded[i],})} onClick={() => handleExpandClick(i)} aria-expanded={expanded} aria-label="show more">
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>
                                {element.description}
                            </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                )
            })}
        </Grid>
    )
} 

export default FleetGrab