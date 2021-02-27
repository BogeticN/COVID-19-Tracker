import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../service"
import { StyledLogin } from "./StyledLogin"

const Login = ({ setUser, user }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <StyledLogin>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if (user) {
                        setUser(user)
                        history.push('/')
                    }
                    else {
                        console.warn('You have entered an invalid username or password')
                    }
                })
            }}>
                <div >
                    <div style={{ marginRight: '7px' }}>Username: <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} /></div>
                    <div>Password: <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} /></div>
                    <div style={{ padding: '15px', margin: '40px' }}><input type="submit" className="btn btn-secondary" style={{ paddingLeft: '50px', paddingRight: '50px' }}  value="Login" /></div>
                </div>
            </form>
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