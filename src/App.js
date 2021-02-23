import { useEffect, useState } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import { getAllCountries, getContinents, getHistoricalStats } from "./service"



const App = () => {

    const [user, setUser] = useState(null)
    const [allCountries, setAllCountries] = useState([])
    const [historyStats, setHistoryStats] = useState([])
    const [continents, setContinents] = useState([])

    useEffect(() => {
        getHistoricalStats().then(res => {
            setHistoryStats(res.data)
        })
    }, [])
    useEffect(() => {
        getContinents().then(res => {
            console.log(res.data)
            setContinents(res.data)
        })  
    }, [])
    useEffect(() => {
        getAllCountries().then(res => {
            setAllCountries(res.data)
        })
    }, [])

    let days = Object.keys(historyStats.cases ? historyStats.cases : historyStats).map(k => k)
    let cases = Object.values(historyStats.cases ? historyStats.cases : historyStats).map(k => k)
    let deaths = Object.values(historyStats.deaths ? historyStats.deaths : historyStats).map(k => k)
    let recovered = Object.values(historyStats.recovered ? historyStats.recovered : historyStats).map(k => k)


    return (
        <>
            <Router>
                <Nav user={user} setUser={setUser} />
                <Switch>
                    <Route path="/login">
                        <Login setUser={setUser} user={user} />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Home
                            continents={continents}
                            allCountries={allCountries}
                            historyStats={historyStats}
                            days={days} deaths={deaths}
                            cases={cases}
                            recovered={recovered}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
