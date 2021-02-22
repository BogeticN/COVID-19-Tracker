import { Link } from "react-router-dom"

const Nav = ({ user,setUser }) => {
    return (
        <>
            <nav>
                <span>Covid-19 Tracker</span>
                <Link style={{ padding: 5 }} to="/">Home</Link>
                {
                    user
                        ?
                        <button onClick={() => setUser(null)}>Log out</button>
                        :
                        <>
                            <Link style={{ padding: 5 }} to="/login">Login</Link>
                            <Link style={{ padding: 5 }} to="/register">Register</Link>
                        </>
                }

            </nav>
        </>
    )
}

export default Nav