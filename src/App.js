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
    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        getAllCountries().then(res => {
            setAllCountries(res.data)
        })
    }, [])
    console.log(allCountries)
    return (
        <Router>
            <Nav user={user} setUser={setUser}/>
            <Switch>
                <Route path="/login">
                    <Login setUser={setUser} user={user} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home allCountries={allCountries}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
