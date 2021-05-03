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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../assets/scss/fleetGrab.scss';
import { useShipListContext } from '../contexts/ShipListContext';
import { useFavoritesContext } from '../contexts/FavoritesContext'
// import { ContactsOutlined } from '@material-ui/icons';
import axios from 'axios'

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
    // const favoritesManifest = useFavoritesContext()
    // const appAPI = 'https://star-citizen-fleet-api.herokuapp.com/model/likedShips' //ATM Machine

    const handleExpandClick = (i) => {
        setExpanded({...expanded, [i]: !expanded[i]})
    }

    const handleFavoritesClick = async (element) => {
        console.log(element)
        // console.log(favoritesManifest)
        // let favCheck = favoritesManifest.favorites.map( x =>{return x.shipID})
        let favCheck = await axios.get('https://star-citizen-fleet-api.herokuapp.com/model/likedShips')
        let favRes = await favCheck.data
        console.log(favCheck.data)
        console.log(favRes)
        let favCheckMapped = favRes.map( x =>{return x.shipID})
        console.log(favCheckMapped)
        let isFavorited = favCheckMapped.includes(element.id)
        console.log(isFavorited)
        
        if(isFavorited !== true){
            let encoded = encodeURI(`https://star-citizen-fleet-api.herokuapp.com/model/likedShips?shipID=${element.id}&manufacturer=${element.manufacturer.name}&name=${element.name}&category=testValue&storeImage=${element.storeImageMedium}&storeURL=${element.storeUrl}&brochure=${element.brochure}&description=thisisat`)
            console.log(encoded)
            await fetch(`${encoded}`, {
                method: 'POST'
            })
        }
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
                            <IconButton className='card-right' aria-label="add to favorites" onClick={() => handleFavoritesClick(element)}>
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