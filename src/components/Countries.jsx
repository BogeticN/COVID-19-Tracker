import Country from "./Country"
import '../main.css'
// import { useTable } from 'react-table'
// import { COLUMNS } from `./columns`


const Countries = ({ allCountries }) => {


    return (
        <>
            <table style={{ border: '1px solid black'}}>
                <tbody>
                    <tr style={{ textAlign: 'left' }} >
                        <th>Country</th>
                        <th>Total cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Population</th>
                    </tr>
                        {allCountries.map(country => <Country key={country.country} country={country} />)}
                </tbody>
            </table>
        </>
    )
}

export default Countries