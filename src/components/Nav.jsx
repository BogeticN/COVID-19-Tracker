import { Link } from "react-router-dom"

const Nav = ({ user,setUser }) => {
    return (
        <header>
            <nav>
                <h1>Covid-19 Tracker</h1>
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
        </header>
    )
}

export default Nav