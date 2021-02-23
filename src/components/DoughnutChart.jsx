import { Pie } from 'react-chartjs-2'


const PieChart = ({ continents }) => {


    // console.log(days)
    // console.log(recovered)

    let allContinents = continents.map(continent => continent.continent)
    let allCases = continents.map(continent => continent.cases)


    const data = {
        labels: allContinents,
        datasets: [
            {
                label: 'Total cases by continents',
                data: allCases ,
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
            text: 'Pie Chart'
        }
    }
    return (
        <>
            <Pie data={data} options={options} />
        </>
    )
}

export default PieChart