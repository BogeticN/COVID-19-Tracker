const Country = ({ country }) => {
    return (
        <tr>
            <td>{<img src={country.countryInfo.flag} style={{ width: '30px', height: '20px' }}></img>} {country.country}</td>
            <td>{country.cases.toLocaleString()}</td>
            <td>{country.deaths.toLocaleString()}</td>
            <td>{country.recovered.toLocaleString()}</td>
            <td>{country.population.toLocaleString()}</td>
        </tr>
    )
}

export default Country