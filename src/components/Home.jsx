import { useEffect, useState } from "react"
import { getWorldStats } from "../service"
import Countries from "./Countries"


const Home = ({ allCountries }) => {

    const [worldStats, setWorldStats] = useState([])

    useEffect(() => {
        getWorldStats().then(res => {
            setWorldStats(res.data)
            // console.log(res.data)
        })
    }, [])



    // console.log(`${new Date().getHours()}:${new Date().getMinutes()}`)


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
        </>
    )
}
export default Home