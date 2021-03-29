import React, {
    useState,
    useContext,
    createContext,
} from 'react'

import axios from 'axios'

const LoginContext = createContext({
    isAuth: false,
    email: '',
    name: '',
    password: '',
    login: () =>{},
    setEmail: () =>{},
    setName: () =>{},
    setPassword: () =>{}
})

export const LoginContextProvider = (props) =>{
    const [isAuth, setIsAuth] = useState(() =>{
        const fetchData = async () =>{
            try {
                const apiURL = 'https://star-citizen-fleet-api.herokuapp.com/model/userLogin'
                const apiRes = await axios.get(apiURL)
                
                //if this doesn't work check axios needs
                const resData = await apiRes.data
                const resID = resData.map(x =>{
                    return x.userID
                })

                let localLogin = localStorage.getItem('userID')

                resID.forEach(element => {
                    let y = element.toString()
                    if(y === localLogin){setIsAuth(!isAuth)}
                });
            } catch(error){console.log(error)}
        }
        fetchData('isAuth')
    })
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () =>{setIsAuth(!isAuth)}
    const emailHandler = () =>{setEmail(email)}
    const nameHandler = () =>{setName(name)}
    const passwordHandler = () =>{setPassword(password)}

    return (
        <LoginContext.Provider value={{
            login: loginHandler,
            setEmail: emailHandler,
            setName: nameHandler,
            setPassword: passwordHandler,
            isAuth: isAuth,
            email: email,
            name: name,
            password: password
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)