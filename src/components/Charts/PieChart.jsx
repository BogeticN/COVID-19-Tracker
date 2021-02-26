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
                fontColor:'white',
                data: allCases ,
                backgroundColor: [
                    'rgb(209, 153, 10)',
                    'rgb(148, 11, 11)',
                    'rgb(11, 114, 20)',
                    'rgba(96, 11, 129, 0.658)',
                    'rgb(10, 54, 173)',
                    'rgba(5, 158, 158, 0.055)'],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Total cases by continent',
            fontColor:'white'
        }
    }
    return (
        <>
            <Pie data={data} options={options} />
        </>
    )
}

export default PieChart