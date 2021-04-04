import { Bar } from 'react-chartjs-2'


const BarChart = ({ balkanCountries }) => {

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
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)',
                    'rgb(209, 153, 10)'],
            },
            {
                label: 'Deaths',
                data: deathsCountriesBalkan ,
                backgroundColor: [
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)',
                    'rgb(148, 11, 11)'],
            },
            {
                label: 'Recovered',
                data: recoveredCountriesBalkan ,
                backgroundColor: [
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)',
                    'rgb(11, 114, 20)'],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Balkan peninsula statistics',
            fontColor:'white',
            fontSize: 20
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        fontColor:"white",
                    }
                }
            ],
            xAxes: [
                {
                    gridLines:{
                        display:true,
                    },
                    ticks: {
                        fontColor:"white",
                    }
                }
            ]
        },
        legend: {
            labels: {
                fontSize: 13,
                fontColor:'white',
                
            }
        },
        maintainAspectRatio:false
        
    }
    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}

export default BarChart