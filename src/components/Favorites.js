import React from 'react'
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

let FavoritesDis = () => {
    const loginCtx = useLoginContext()

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
    
    console.log('Test')
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const favoritesManifest = useFavoritesContext()
    const appAPI = 'https://star-citizen-fleet-api.herokuapp.com/model/likedShips' //ATM Machine

    const handleExpandClick = (i) => {
        setExpanded({...expanded, [i]: !expanded[i]})
    }

    const handleFavoritesClick = async (element) => {
        let favCheck = favoritesManifest.map( x =>{return x.shipID})
        let isFavorited = favCheck.includes(element.id)

        isFavorited ? await fetch(appAPI , {method: 'DELETE'}) : await fetch(appAPI , {method: 'POST'})
    }

    
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
                        <h2>This Section of the application lets you save different ships to different fleet lists you create.</h2>
                    </div>
                    <div>
                        <Grid className='cardGrid'>
                            {favoritesManifest.shipList.map((element, i) => {
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
                    </div>
                </div>
                )
            }
        </main>
    )
}

export default FavoritesDis