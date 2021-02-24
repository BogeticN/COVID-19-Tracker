import { Doughnut } from 'react-chartjs-2'


const SingleDoughnutChart = ({ countryDetail }) => { 


    const data = {
        labels: ['Total cases','Active cases','Deaths','Recoveries'],
        datasets: [
            {
                label: 'Statistics for today',
                data: [countryDetail?.casesPerOneMillion,countryDetail?.activePerOneMillion,countryDetail?.deathsPerOneMillion,countryDetail?.recoveredPerOneMillion],
                backgroundColor: [
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
            text: 'Statistics per 1 million people'
        }
    }
    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    )
}

export default SingleDoughnutChart