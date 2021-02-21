import { useEffect, useState } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import { getAllCountries } from "./service"
import Countries from "./components/Countries"

const App = () => {

    const [user, setUser] = useState(null)
    const [allCountries,setAllCountries] = useState([])

    useEffect(() => {
        getAllCountries().then(res => {
            setAllCountries(res.data)
        })
    },[])
    console.log(allCountries)
    return (
        <Router>
            <Nav />

            <Route path="/">
                <Home user={user} />
            </Route>
            <Countries allCountries={allCountries}/>

            <Switch>
                <Route path="/login">
                    <Login  setUser={setUser} user={user} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                
            </Switch>
            {user ? <button onClick={() => setUser(null)}>Log out</button> : null}
        </Router>
    );
}

export default App;
