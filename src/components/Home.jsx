import { useEffect, useState } from "react"
import { getWorldStats } from "../service"
// import BasicTable from "./BasicTable"
import Countries from "./Countries"
import DoughnutChart from "./DoughnutChart"
import LineChart from "./LineChart"


const Home = ({ continents,allCountries,historyStats,days,cases,deaths,recovered }) => {

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
            <div>
            <LineChart historyStats={historyStats} days={days} deaths={deaths} cases={cases} recovered={recovered}/>
            <DoughnutChart continents={continents}/>
            </div>
        </>
    )
}
export default Home