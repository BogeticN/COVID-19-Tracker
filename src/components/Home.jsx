import { useEffect, useState } from "react"
import { getWorldStats } from "../service"
import BarChart from "./Charts/BarChart"
import Countries from "./Countries"
import PieChart from "./Charts/PieChart"
import LineChart from "./Charts/LineChart"


const Home = ({ balkanCountries,continents,allCountries,historyStats,days,cases,deaths,recovered }) => {

    const [worldStats, setWorldStats] = useState([])

    useEffect(() => {
        getWorldStats().then(res => {
            setWorldStats(res.data)
            // console.log(res.data)
        })
    }, [])


    return (
        <>
            <div style={{ border: 'solid black 1px' }}>
                <h1>World statistics</h1>
                <div>Total cases:{worldStats.cases?.toLocaleString()}</div>
                <div>Deaths:{worldStats.deaths?.toLocaleString()}</div>
                <div>Recovered:{worldStats.recovered?.toLocaleString()}</div>
                <div>Active:{worldStats.active?.toLocaleString()}</div>
                <div>Last updated:{String(new Date(worldStats.updated).toLocaleString())}</div>
            </div>
            <Countries allCountries={allCountries} />
            <LineChart historyStats={historyStats} days={days} deaths={deaths} cases={cases} recovered={recovered}/>
            <PieChart continents={continents}/>
            <BarChart balkanCountries={balkanCountries}/>
        </>
    )
}
export default Home