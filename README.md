# Star Citizen Ship Database

This app will display some of the ships available in the game Star Citizen (SC). Start Citizen is being developed by Roberts Space Industries (RSI) and is a high tech space simulation game. Not having a machine capable of properly handling the game I can't attest to the game-play, but i do enjoy checking in on it's development and design from time to time.

One of the things I thought this little app could do was provide a way to search through and filter certain aspects of the games ship line up that aren't available in the games normal site. 

Current features:

*   One of the first features is the ability to easily see which ships have brochures created for them and a link to download / view those brochures. 

*   Another feature would be linking to the RSI store page for each ship to find the official data, information, and extensive views.

*   The project also incorporates login exclusive viewing

*   Error route handling

*   A favorites list functionality

## Associated GitHub Repositories

*   [Rest API](https://github.com/Ry-Hebert/Node-http-1)

*   [GraphQL API](https://github.com/Ry-Hebert/graph_ql_api)

##  DGM-4790 Final Project Requirements

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

### 2.  Work with the proper libraries (e.g. VueJS, React) to create and manage the front-end portion of your project using a real development toolset.

The front end of the project has been built with React .JS to dynamically render content to the user.

### 3.  Work with NPM and NodeJS to create and manage the back-end portion of your project.

This project has been built using NPM and Node.JS and can be seen here in this repository. The package.json file can be found [here](./package.json) and tested by cloning and running * ** npm install ** * and then * ** npm start * **

The rest api that this application interfaces with that was also built using NPM and Node can be found [here](https://github.com/Ry-Hebert/Node-http-1)

### 4.  "Seed" script provides way to populate the datastore after the Docker install and launch.

The GraphQL server and seed script functions can be found in the following repo. [GraphQL API](https://github.com/Ry-Hebert/graph_ql_api)



### 5.  Properly use Git for your source version control with an established record of at least 4 days of commits each week from February 19th through April 30th.

This can be viewed on my [GitHub](https://github.com/Ry-Hebert).



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

### 7.  Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.

Multiple instances of CSS animations and transitions have been incorporated into this project. Some of the parts of the project that include them are as follows.

*   Ripple effect on cards when clicked
*   Ripple effect on buttons when clicked
*   Ripple effect on Icons when clicked
*   Menu side bar slides in and out when clicked
*   Login / Logout slides in and out quickly while fading respectively
*   Card expands on view more icon click
*   View more icon rotates when clicked

### 8.  Connect to a server using HTTP and display retrieved data.

The effects of this process can be seen by logging in an using the app to view the displayed information. But the main bulk of the backend code that handles that process can be seen here

```javascript
const apiURL = 'https://api.fleetyards.net/v1/models?page=1&perPage=100'

useEffect(() =>{
    const fetchData = async () =>{
        try {
            const apiRes = await axios.get(apiURL)
            
            //if this doesn't work check axios needs
            const resData = await apiRes.data

            console.log(`This is apiRes: ${apiRes} This is resData: ${resData}`)

            setShipList(resData)

        } catch(error){console.log(error)}
    }
    fetchData('shipList')
}, [])
```

### 9.  Provide at least 3 different routes with navigation between them using React Router.

The three main routes are as follows:

*   [The About Page](https://dgm-3790-react-app-take-2.netlify.app/)
    *   https://dgm-3790-react-app-take-2.netlify.app/
*   [The Main App Display](https://dgm-3790-react-app-take-2.netlify.app/shipList)
    *   https://dgm-3790-react-app-take-2.netlify.app/shipList
*   [Error Handling](https://dgm-3790-react-app-take-2.netlify.app/error)
    *   https://dgm-3790-react-app-take-2.netlify.app/error
        *   anything can be added in place of the "error"

Main handling for the routes:

```javascript
<Switch>
    <Route path='/' component={About} exact />
    <Route path='/shipList' component={FleetDis} />
    <Route component={Error} />
</Switch>
```
### 10. Manage your application's state using Hooks and the Context API.

The contexts are implemented here

*   [LoginContext](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/contexts/LoginContext.js)
*   [ShipListContext](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/contexts/ShipListContext.js)

and the contexts and use of states can be seen here:

*   [Login](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/Login.js)
*   [NavAppBar](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/NavAppBar.js)
*   [FleetGrab](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetGrab.js)
*   [FleetDisplay](https://github.com/Ry-Hebert/DGM-3790-second-try/blob/master/src/components/FleetDis.js)

### 10. Structure, document, and deploy your final project code according to common industry practices.

This can be seen here in the [GitHub](https://github.com/Ry-Hebert/DGM-3790-second-try#1encapsulate-your-code-as-react-functional-components) and in the [deployed app](https://dgm-3790-react-app-take-2.netlify.app)



Present a User Interface route or "page" that allows the user to: 
CREATE a meaningful (at least 5 data fields) resource through a REST endpoint that is stored in the datastore
Read or GET meaningful data from 3 different REST endpoints
UPDATE at least 1 portion of meaningful data through the appropriate endpoint
DELETE some resource via the proper endpoint
Present a separate User Interface route or "page" that allows the user to:
CREATE a meaningful (at least 5 data fields) resource through a GraphQL endpoint that is stored in the datastore
Read or GET meaningful data from with at least 3 different query options from the GraphQL endpoint.
UPDATE at least 1 portion of meaningful data through an appropriate GraphQL mutation.
DELETE some resource using a proper GraphQL mutation.
You will submit the GitHub URL for your project with a detailed ReadMe explaining how to install and run your server(s) on Docker or from your deployed sites.
