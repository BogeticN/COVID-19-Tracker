import { Bar } from 'react-chartjs-2'


const BarChart = ({ balkanCountries }) => {


    // console.log(days)
    // console.log(recovered)

    let allCasesBalkan = balkanCountries.map(country => country.cases)
    let allCountriesBalkan = balkanCountries.map(country => country.country)
    let deathsCountriesBalkan = balkanCountries.map(country => country.deaths)
    let recoveredCountriesBalkan = balkanCountries.map(country => country.recovered)

    const data = {
        labels: allCountriesBalkan,
        datasets: [
            {
                label: 'Total cases ',
                data: allCasesBalkan ,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'],
            },
            {
                label: 'Total deaths ',
                data: deathsCountriesBalkan ,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'],
            },
            {
                label: 'Total recovered ',
                data: recoveredCountriesBalkan ,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Balkan peninsula statistics'
        }
    }
    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}

export default BarChart