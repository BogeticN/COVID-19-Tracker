import { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"
import { getOneCountryHistory } from "../../service"
import SingleLineChart from "../Charts/SingleLineChart"
import SingleDoughnutChart from "../Charts/SingleDoughnutChart"
import { StyledCharts } from "../Home/StyledHome"
import { StyledCountryDetails } from "./StyledCountryDetails"

const CountryDetails = ({ allCountries, user }) => {

    const [oneCountryHistory, setOneCountryHistory] = useState(null)

    const cases = oneCountryHistory ? Object.values(oneCountryHistory.timeline.cases) : []
    const deaths = oneCountryHistory ? Object.values(oneCountryHistory.timeline.deaths) : []
    const recovered = oneCountryHistory ? Object.values(oneCountryHistory.timeline.recovered) : []
    const days = oneCountryHistory ? Object.keys(oneCountryHistory.timeline.cases) : []

    let { country } = useParams()

    let countryDetail = allCountries.find(c => c.country == country)

    useEffect(() => {
        let mounted = true
        getOneCountryHistory(country).then(res => {
            if (mounted)
                setOneCountryHistory(res.data)
        })
        return () => mounted = false
    }, [])

    return user ? (
        <>
            <h1>{countryDetail?.country}</h1>

            <StyledCountryDetails >
                <div>
                    <div className="single-text-cards total-cases" >
                        <div className="heading">
                            <p> {countryDetail?.cases.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Total cases</p>
                        </div>
                    </div>
                    <div className="single-text-cards recovered" >
                        <div className="heading">
                            <p> {countryDetail?.recovered.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Recovered</p>
                        </div>
                    </div>
                    <div className="single-text-cards deaths" >
                        <div className="heading">
                            <p> {countryDetail?.deaths.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Deaths</p>
                        </div>
                    </div>
                    <div className="single-text-cards critical" >
                        <div className="heading">
                            <p> {countryDetail?.critical.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Critical</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <div className="single-text-cards population" >
                        <div className="heading">
                            <p> {countryDetail?.population.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Population</p>
                        </div>
                    </div>
                    <div className="single-text-cards tests" >
                        <div className="heading">
                            <p> {countryDetail?.tests.toLocaleString()}</p>
                        </div>
                        <div className="text-box" >
                            <p>Tests</p>
                        </div>
                    </div>
                    <div className="single-text-cards today-cases" >
                        <div className="heading">
                            <p> {countryDetail?.todayCases.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Today cases</p>
                        </div>
                    </div>
                    <div className="single-text-cards today-deaths" >
                        <div className="heading">
                            <p> {countryDetail?.todayDeaths.toLocaleString()}</p>
                        </div>
                        <div className="text-box">
                            <p>Today deaths</p>
                        </div>
                    </div>
                </div>

            </StyledCountryDetails >

            <StyledCharts>
                    <div className="chart" style={{ marginBottom: '3110px' }}>
                        <SingleDoughnutChart countryDetail={countryDetail} />
                    </div>
                {oneCountryHistory ?
                    <div className="chart">
                        <SingleLineChart days={days} cases={cases} deaths={deaths} recovered={recovered} />
                    </div>
                    :
                    null}
            </StyledCharts>
        </>
    )
        :
        (
            <Redirect to='/login'></Redirect>
        )
}

export default CountryDetails