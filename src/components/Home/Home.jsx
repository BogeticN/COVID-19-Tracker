import { useEffect, useState } from "react"
import { getWorldStats } from "../../service"
import BarChart from "../Charts/BarChart"
import Countries from "../Countries/Countries"
import PieChart from "../Charts/PieChart"
import LineChart from "../Charts/LineChart"
import { StyledHome } from './StyledHome'
import { StyledDate } from './StyledHome'


const Home = ({ balkanCountries, continents, allCountries, historyStats, days, cases, deaths, recovered }) => {

    const [worldStats, setWorldStats] = useState([])

    useEffect(() => {
        getWorldStats().then(res => {
            setWorldStats(res.data)
            // console.log(res.data)
        })
    }, [])


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>World statistics</h1>
            <StyledDate className='date'>Last updated:<p>{String(new Date(worldStats.updated).toLocaleString())}</p></StyledDate>
            <StyledHome >
                <div className="text-card total-cases" >
                    <div className="heading">
                        <h2>{worldStats.cases?.toLocaleString()}</h2>
                    </div>
                    <div className="text-box">
                        <p style={{ color: 'rgb(133, 131, 131)', height: '73px' }}>Total cases</p>
                    </div>
                </div>
                <div className="text-card deaths">
                    <div className="heading">
                        <p>{worldStats.deaths?.toLocaleString()}</p>
                    </div>
                    <div className="text-box" >
                        <p style={{ color: 'rgb(194, 88, 88)' }}>Deaths</p>
                    </div>
                </div>
                <div className="text-card recovered" >
                    <div className="heading">
                        <p>{worldStats.recovered?.toLocaleString()}</p>
                    </div>
                    <div className="text-box">
                        <p style={{ color: 'rgb(102, 187, 106)' }}>Recovered</p>
                    </div>
                </div>
                <div className="text-card active">
                    <div className="heading">
                        <p >{worldStats.active?.toLocaleString()}</p>
                    </div>
                    <div className="text-box">
                        <p style={{ color: 'rgb(102, 117, 187)' }}>Active</p>
                    </div>
                </div>
            </StyledHome>

            <Countries allCountries={allCountries} />
            <div className="test">
                <div className="test1">
                    <LineChart historyStats={historyStats} days={days} deaths={deaths} cases={cases} recovered={recovered} />
                </div>
                <div className="test1">
                    <PieChart continents={continents} />
                </div>
                <div className="test1">
                    <BarChart balkanCountries={balkanCountries} />
                </div>
            </div>
        </>
    )
}
export default Home