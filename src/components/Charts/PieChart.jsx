import { Pie } from 'react-chartjs-2'


const PieChart = ({ continents }) => {

    let allContinents = continents.map(continent => continent.continent)
    let allCases = continents.map(continent => continent.cases)


    const data = {
        labels: allContinents,
        datasets: [
            {
                label: 'Total cases by continents',
                fontColor:'white',
                data: allCases ,
                borderColor:'grey',
                backgroundColor: [
                    'rgb(209, 153, 10)',
                    'rgb(148, 11, 11)',
                    'rgb(11, 114, 20)',
                    'rgb(96, 11, 129)',
                    'rgb(10, 54, 173)',
                    'rgb(5, 158, 158)'],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Total cases by continent',
            fontColor:'white',
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
            <Pie data={data} options={options} />
        </>
    )
}

export default PieChart