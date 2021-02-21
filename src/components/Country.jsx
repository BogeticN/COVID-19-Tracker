const Country = ({ country }) => {
    return (
        <tr>
            <td><img src={country.countryInfo.flag} style={{ width: '25px' }}></img></td>
            <td>{country.country}</td>
            <td>{country.cases.toLocaleString()}</td>
            <td>{country.deaths.toLocaleString()}</td>
            <td>{country.recovered.toLocaleString()}</td>
        </tr>
    )
}

export default Country