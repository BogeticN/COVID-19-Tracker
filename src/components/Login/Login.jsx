import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../service"
import { StyledLogin } from "./StyledLogin"

const Login = ({ setUser, user, loginUsername, setLoginUsername }) => {

    const [loginPassword, setLoginPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const history = useHistory()

    return (
        <StyledLogin>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === loginUsername || el.email === loginUsername) && el.password === loginPassword)
                    if (user) {
                        setUser(user)
                        history.push('/')
                    }
                    else {
                        setLoginError(<p>You have entered an invalid username or password</p>)
                    }
                })
            }}>
                <div>
                    <div className="username-input">Username: <input type="text" placeholder="Username..." onChange={e => setLoginUsername(e.target.value)} /></div>
                    <div className="password-input">Password: <input type="password" placeholder="Password..." onChange={e => setLoginPassword(e.target.value)} /></div>
                    <div className="div-submit"><input type="submit" className="btn btn-secondary" style={{ paddingLeft: '50px', paddingRight: '50px' }} value="Login" /></div>
                </div>
            </form>
            {loginError}
            {user ?
                null
                :
                <div className="text-login">
                    <p>You have to log in to see detailed statistics for each country</p>
                    <p>No account?<Link to='/register'>Create one</Link></p>
                </div>
            }
        </StyledLogin>
    )
}
export default Login