import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../service"

const Login = ({ setUser, user }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <>
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
                <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
            {user ?
                null
                :
                <>
                    <p>You have to log in to see detailed statistics for each country</p>
                    <div>
                        <p>No account?<Link to='/register'>Create one</Link></p>
                    </div>
                </>
            }

        </>
    )
}
export default Login