import { registerUser } from "../../service"
import { getAllUsers } from "../../service"
import { useHistory } from 'react-router-dom'
import { useState } from "react"
import { StyledRegister } from "../Register/StyledRegister"


const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const [error, setError] = useState('')

    const history = useHistory()

    let regEx = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/
    let emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    const validData = (password, username,email) => username?.length >= 4 && password?.length >= 6 && regEx.test(password) && emailRegEx.test(email)

    const errorType = () => {
        if (!regEx.test(password)) setError('Password must contain at least one upper case,one lower case,and one number')
        if (password?.length < 6) setError('Password must have at least 6 characters')
        if (username?.length < 4) setError('Username must have at least 4 characters')
        if (!emailRegEx.test(email)) setError('Invalid email adress')
    }
    return (
        <StyledRegister >
            <form onSubmit={e => {
                e.preventDefault()
                if (!validData(password, username,email)) {
                    errorType()
                    return
                }
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {
                        registerUser(username, email, password).then(() => {
                            history.push('/login')
                        })
                    }
                    else {
                        window.alert('User already exists')
                    }
                    console.log(res.data)
                })
            }}>
                <div className="register-input">
                    <div className="username">Username: <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} /></div>
                    <div className="email">Email: <input type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)} /></div>
                    <div className="password">Password: <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} /></div>
                    <div className="submit"><input  className="btn btn-secondary" type="submit" value="Register" /></div>
                </div>
            </form>
            <div className="error">{error}</div>
        </StyledRegister>


    )
}

export default Register