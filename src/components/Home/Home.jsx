import { useEffect, useState } from "react"
import { getWorldStats } from "../../service"
import BarChart from "../Charts/BarChart"
import Countries from "../Countries/Countries"
import PieChart from "../Charts/PieChart"
import LineChart from "../Charts/LineChart"
import { StyledCharts, StyledHome,StyledDate } from './StyledHome'


const Home = ({ balkanCountries, continents, allCountries, historyStats, days, cases, deaths, recovered }) => {

    const [worldStats, setWorldStats] = useState([])
    
    useEffect(() => {
        getWorldStats().then(res => {
            setWorldStats(res.data)
        })
    }, [])

    return (
        <>  
            <h1>World statistics</h1>
            <StyledDate className='date'>Last updated:<p>{String(new Date(worldStats.updated).toLocaleString())}</p></StyledDate>
            <StyledHome >
                <div className="text-card total-cases" >
                    <div className="heading">
                        <p>{worldStats.cases?.toLocaleString()}</p>
                    </div>
                    <div className="text-box">
                        <p>Total cases</p>
                    </div>
                </div>
                <div className="text-card deaths">
                    <div className="heading">
                        <p>{worldStats.deaths?.toLocaleString()}</p>
                    </div>
                    <div className="text-box" >
                        <p>Deaths</p>
                    </div>
                </div>
                <div className="text-card recovered" >
                    <div className="heading">
                        <p>{worldStats.recovered?.toLocaleString()}</p>
                    </div>
                    <div className="text-box">
                        <p>Recovered</p>
                    </div>
                </div>
                <div className="text-card active">
                    <div className="heading">
                        <p>{worldStats.active?.toLocaleString()}</p>
                    </div>
                    <div className="text-box">
                        <p>Active</p>
                    </div>
                </div>
            </StyledHome>

            <Countries allCountries={allCountries} />

            <StyledCharts>
                <div className="chart-container">
                    <LineChart historyStats={historyStats} days={days} deaths={deaths} cases={cases} recovered={recovered} />
                </div>
                <div className="chart-container">
                    <PieChart continents={continents} />
                </div>
                <div className="chart-container">
                    <BarChart balkanCountries={balkanCountries} />
                </div>
            </StyledCharts>
        </>
    )
}
export default Home