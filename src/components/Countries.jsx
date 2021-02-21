import Country from "./Country"

const Countries = ({ allCountries }) => {
    return (
        <>
            <table style={{ border: '1px solid black'}}>
                <tbody>
                    <tr style={{ textAlign: 'left' }} >
                        <th> </th>
                        <th>Country</th>
                        <th>Total cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                        {allCountries.map(country => <Country key={country.country} country={country} />)}
                </tbody>
            </table>
        </>
    )
}

export default Countries