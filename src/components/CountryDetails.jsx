import { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"
import { getOneCountryHistory } from "../service"
import SingleLineChart from "./Charts/SingleLineChart"
import SingleDoughnutChart from "./Charts/SingleDoughnutChart"

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
            <div>
                <h1>{countryDetail?.country}</h1>
                <p>Total cases:{countryDetail?.cases.toLocaleString()}</p>
                <p>Active cases:{countryDetail?.active.toLocaleString()}</p>
                <p>Population:{countryDetail?.population.toLocaleString()}</p>
                <p>Deaths:{countryDetail?.deaths.toLocaleString()}</p>
                <p>Recovered:{countryDetail?.recovered.toLocaleString()}</p>
                <p>Number of tests:{countryDetail?.tests.toLocaleString()}</p>
                <p>Today cases:{countryDetail?.todayCases.toLocaleString()}</p>
                <p>Today deaths:{countryDetail?.todayDeaths.toLocaleString()}</p>
            </div>
            <SingleDoughnutChart countryDetail={countryDetail} />
            {oneCountryHistory ?
                <SingleLineChart days={days} cases={cases} deaths={deaths} recovered={recovered} />
                :
                "Oops!Sorry,but there is no data on total cases over the last 30 days for this country"}
        </>
    )
        :
        (
            <Redirect to='/login'></Redirect>
        )
}

export default CountryDetails