import { StyledLink, StyledNav } from './StyledNav'

const Nav = ({ user, setUser, loginUsername }) => {
    return (
        <header>
            <StyledNav >
                <StyledLink to="/">Home</StyledLink>
                {
                    user
                        ?
                        <>
                            <span>{loginUsername}</span>
                            <button className='btn btn-secondary' onClick={() => setUser(null)}>Log out</button>
                        </>
                        :
                        <>
                            <StyledLink to="/login">Login</StyledLink>
                            <StyledLink to="/register">Register</StyledLink>
                        </>
                }
            </StyledNav>
            <h1 style={{ textAlign: 'left' }}>Covid-19 Tracker</h1>
        </header>
    )
}

export default Nav