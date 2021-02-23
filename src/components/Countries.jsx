import Country from "./Country"
import '../main.css'


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
                        {/* {allCountries.map(country => <Link to={`/country/${country.countryInfo._id}`} key={country.country} country={country} >{country.country}</Link>)} */}
                        {allCountries.map(country => <Country key={country.country} country={country} />)}
                </tbody>
            </table>
        </>
    )
}

export default Countries