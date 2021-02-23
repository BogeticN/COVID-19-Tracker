import { useEffect, useState } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import { getAllCountries, getBalkan, getContinents, getHistoricalStats } from "./service"
import CountryDetails from "./components/CountryDetails"



const App = () => {

    const [user, setUser] = useState(null)
    const [allCountries, setAllCountries] = useState([])
    const [historyStats, setHistoryStats] = useState([])
    const [continents, setContinents] = useState([])
    const [balkanCountries, setBalkanCountries] = useState([])

    useEffect(() => {
        getHistoricalStats().then(res => {
            setHistoryStats(res.data)
        })
    }, [])
    useEffect(() => {
        getContinents().then(res => {
            // console.log(res.data)
            setContinents(res.data)
        })
    }, [])
    useEffect(() => {
        getAllCountries().then(res => {
            setAllCountries(res.data)
            console.log(res.data)

        })
    }, [])
    useEffect(() => {
        getBalkan().then(res => {
            // console.log(res.data)
            setBalkanCountries(res.data)
        })
    }, [])

    let days = Object.keys(historyStats.cases ? historyStats.cases : historyStats)
    let cases = Object.values(historyStats.cases ? historyStats.cases : historyStats)
    let deaths = Object.values(historyStats.deaths ? historyStats.deaths : historyStats)
    let recovered = Object.values(historyStats.recovered ? historyStats.recovered : historyStats)


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
                    <Route path="/:country">
                        <CountryDetails allCountries={allCountries} user={user}/>
                    </Route>
                    <Route path="/">
                        <Home
                            continents={continents}
                            allCountries={allCountries}
                            historyStats={historyStats}
                            days={days} deaths={deaths}
                            cases={cases}
                            recovered={recovered}
                            balkanCountries={balkanCountries}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
