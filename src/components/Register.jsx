import { registerUser } from "../service"
import { getAllUsers } from '../service'
import { useHistory } from 'react-router-dom'
import { useState } from "react"


const Register = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')
    const history = useHistory()

    const setErrorHelper = (text) => {
        setError(text)
    }

    console.log(password)
    let regEx = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/

    const validData = (password, username) => username.length >= 4 && password.length >= 6 && regEx.test(password)

    const errorType = () => {
        if (!regEx.test(password)) setError ('Password must contain at least one upper case,one lower case,and one number')
        if (password.length < 6) setError ('Password must have at least 6 characters')
        if (username.length < 4) setError ('Username must have at least 4 characters')
    }
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!validData(password, username)) {
                    errorType()
                    console.log(password);
                    console.log(validData(password, username))
                    return
                }
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {
                        registerUser(username, email, password).then(() => {
                            history.push('/login')
                        })
                    }
                    else {
                        console.log('User already exists')
                    }
                    console.log(res.data)
                })
            }}>
                <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} />
                <input type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Register" />
            </form>
            <div>{error}</div>
        </div>
    
            
    )
}

export default Register