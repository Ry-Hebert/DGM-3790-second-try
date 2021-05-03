import React, { useState } from 'react'
import '../assets/scss/fleetGrab.scss'
import { useLoginContext } from '../contexts/LoginContext';
import { useFavoritesContext } from '../contexts/FavoritesContext'
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

const FavoritesDis = () => {
    const loginCtx = useLoginContext()
    
    console.log('Test')
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const favoritesManifest = useFavoritesContext()
    const [fList, setFList] = useState(favoritesManifest)
    const appAPI = 'https://star-citizen-fleet-api.herokuapp.com/model/likedShips/' //ATM Machine

    const updateFavoritesList = async () =>{
        const quickFix = 'https://star-citizen-fleet-api.herokuapp.com/model/likedShips'

        const apiRes = await axios.get(quickFix)
        const resData = await apiRes.data
        setFList(await resData)
    }

    const handleExpandClick = (i) => {
        setExpanded({...expanded, [i]: !expanded[i]})
    }

    const handleFavoritesClick = async (element) => {
        let favCheck = favoritesManifest.favorites.map( x =>{return x._id})
        let isFavorited = favCheck.includes(element._id)
        let encoded = encodeURI(`https://star-citizen-fleet-api.herokuapp.com/model/likedShips/${element.shipID}`)
        console.log('Handle Favorites Function: ')
        console.log(element)
        console.log(encoded)

        isFavorited ? await fetch(`${appAPI}${element._id}`, {method: 'DELETE'}) : await fetch(appAPI , {method: 'POST'})
        console.log(element.shipID)
        updateFavoritesList()
        console.log(favoritesManifest)
        console.log(fList)
    }

    console.log(fList)
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
                        <h1>Favorites / Fleet Lists</h1>
                        <h4>This Section of the application lets you save different ships to different fleet lists you create.</h4>
                        <h5>You can drag and drop the ship cards to rearrange their order.</h5>
                    </div>
                    <div>
                        <Grid className='cardGrid'>
                            {favoritesManifest.favorites.map((element, i) => {
                                let elAlt = `The ${element.manufacturer}, ${element.shipName}`
                                let elImg = `${element.storeImage}`
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
                    </div>
                </div>
                )
            }
        </main>
    )
}

export default FavoritesDis