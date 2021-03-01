import { Doughnut } from 'react-chartjs-2'


const SingleDoughnutChart = ({ countryDetail }) => {

    const data = {
        labels: ['Total cases', 'Active', 'Deaths', 'Recovered'],
        datasets: [
            {
                label: 'Statistics per 1 million people',
                data: [countryDetail?.casesPerOneMillion, countryDetail?.activePerOneMillion, countryDetail?.deathsPerOneMillion, countryDetail?.recoveredPerOneMillion],
                borderColor: 'grey',
                backgroundColor: [
                    'rgb(209, 153, 10)',
                    'rgb(10, 54, 173)',
                    'rgb(148, 11, 11)',
                    'rgb(11, 114, 20)',
                ],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Statistics per 1 million people',
            fontColor: 'white',
            fontSize:20
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    }
    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    )
}

export default SingleDoughnutChart