import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>  
            <nav>
                <span>Covid-19 Tracker</span>
                <Link style={{ padding: 5 }} to="/">Home</Link>
                <Link style={{ padding: 5 }} to="/login">Login</Link>
                <Link style={{ padding: 5 }} to="/register">Register</Link>
            </nav>
        </>
    )
}

export default Nav