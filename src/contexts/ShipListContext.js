import React, {
    useState,
    useContext,
    createContext,
    useEffect
} from 'react'
import axios from 'axios'
    
const apiURL = 'https://api.fleetyards.net/v1/models?page=1&perPage=200'

const ShipListContext = createContext({
    shipList: [],
})

export const ShipListContextProvider = (props) => {
    const [shipList, setShipList] = useState([])

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

    // setShipList(apiRes.data)

    // const apiRes = axios.get(apiURL)
    // setShipList({shipList: apiRes})

    console.log(`This is the manifest: ${shipList}`)
    console.log(shipList)

    return (
        <ShipListContext.Provider value={{ shipList }}>
        {props.children}
        </ShipListContext.Provider>
    )
}

export const useShipListContext = () => useContext(ShipListContext)