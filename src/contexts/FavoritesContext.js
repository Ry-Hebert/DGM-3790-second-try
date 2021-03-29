import React, {
    useState,
    useContext,
    createContext,
    useEffect
} from 'react'
import axios from 'axios'
    
const apiURL = 'https://star-citizen-fleet-api.herokuapp.com/model/likedShips'

const FavoritesContext = createContext({
    favorites: [],
})

export const FavoritesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const apiRes = await axios.get(apiURL)
                
                //if this doesn't work check axios needs
                const resData = await apiRes.data

                console.log(`This is apiRes: ${apiRes} This is resData: ${resData}`)

                setFavorites(resData)

            } catch(error){console.log(error)}
        }
        fetchData('favorites')
    }, [])

    console.log(`This is the favorites list: ${favorites}`)
    console.log(favorites)

    return (
        <FavoritesContext.Provider value={{ favorites }}>
        {props.children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)