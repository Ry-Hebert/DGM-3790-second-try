import React, {
    useState,
    useContext,
    createContext,
} from 'react'

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
    const [isAuth, setIsAuth] = useState(false)
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