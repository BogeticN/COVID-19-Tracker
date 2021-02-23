import { Line } from 'react-chartjs-2'


const SingleLineChart = ({days,cases,recovered,deaths,error} ) => {
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
            text: 'Total cases over last 30 days'
        },
        scales:{
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: Math.max(...cases),
                        stepSize: cases / 5
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

export default SingleLineChart