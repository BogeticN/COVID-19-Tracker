import { Line } from 'react-chartjs-2'


const LineChart = ({days,cases,deaths,recovered} ) => {
    

    // console.log(days)
    // console.log(recovered)
    const data = {
        labels: days,
        datasets: [
            {
                label: 'Total cases over time',
                data: cases,
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
                label:'Deaths',
                data:deaths,
                borderColor: ['rgba(255, 128, 128, 0.2)'],
                backgroundColor: ['rgba(255, 128, 128, 0.2)'],
                pointBackgroundColor: 'rgba(255, 128, 128, 0.2)',
                pointBorderColor: 'rgba(255, 128, 128, 0.2)'
            },
            {
                label:'Recovered',
                data:recovered,
                borderColor: ['rgba(193, 240, 193, 0.4)'],
                backgroundColor: ['rgba(193, 240, 193, 0.4)'],
                pointBackgroundColor: 'rgba(193, 240, 193, 0.4)',
                pointBorderColor: 'rgba(193, 240, 193, 0.4)'
            }
        ]
    }
    const options = {
        title:{
            display:true,
            text: 'Line Chart'
        },
        scales:{
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 120000000,
                        stepSize: 20000000
                    }
                }
            ]
        }
    }
    return (
        <>
            <Line data={data} options={options}/>
        </>
    )
}

export default LineChart