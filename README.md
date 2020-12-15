# Star Citizen Ship Database

This app will display the ships available in the game Star Citizen (SC). Start Citizen is being developed by Roberts Space Industries (RSI) and is a high tech space simulation game. Not having a machine capable of properly handling the game I can't attest to the game-play, but i do enjoy checking in on it's development and design.

One of the things I thought this little app could do was provide a way to search through and filter certain aspects of the games ship line up that aren't available in the games normal site. 

Current features:

* One of the first features is the ability to easily see which ships have brochures created for them and a link to download / view those brochures. 

* Another feature would be to link to the RSI store page for each ship to find the official data, information, and extensive views for each ship.


## Project Requirements 

### 1.  Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.

These methods are used in several places throughout the code. Most notably however is its use in FleeGrab.js where it is used to output the code for the card blocks.

```javascript
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
```

### 2.  Encapsulate your code as React functional components.

All components have been implemented as functional components.

### 3.  Work with command-line tools and NPM to create and manage your project within a real development toolset.

The following is a list of some of the tools used in the creation and or testing of this project.

*   Terminal / command-line
*   VS Code
*   Git
*   NPM
*   Yarn
*   curl

### 4.  Allow communication between components using props and the Context API.

Examples of this can be seen in the following files.

*   Contexts
    *   [LoginContext](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/contexts/LoginContext.js)
    *   [ShipListContext](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/contexts/ShipListContext.js)
*   Components
    *   [Login](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/Login.js)
    *   [NavAppBar](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/NavAppBar.js)
    *   [FleetGrab](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetGrab.js)

### 5.  Present a form for user input that provides useful form validation and feedback.

As the implementation on this is lengthy for a code block and the file it's implemented in mostly just handles that form and its validation and feedback im just going to link it here.

*   [Login](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/Login.js)

### 6.  Create at least 5 custom components and use it within at least two of your other components.

*   Custom components
    *   [About](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/About.js)
    *   [Error](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/Error.js)
    *   [FleetDis](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetDis.js)
    *   [FleetGrab](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetGrab.js)
    *   [Login](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/Login.js)
    *   [NavAppBar](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/NavAppBar.js)
    *   [App](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/App.js)
*   Components that use other custom components within them
    *   [FleetDis](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetDis.js)
    *   [NavAppBar](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/NavAppBar.js)
    *   [App](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/App.js)
    *   [index](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/index.js)

Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
Connect to a server using HTTP and display retrieved data.
Provide at least 3 different routes with navigation between them using React Router.
Manage your application's state using Hooks and the Context API.
Structure, document, and deploy your final project code according to common industry practices.