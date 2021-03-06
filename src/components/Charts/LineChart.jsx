import { Line } from 'react-chartjs-2'


const LineChart = ({ days, cases, deaths, recovered }) => {

    const data = {
        labels: days,
        datasets: [
            {
                label: 'Total cases',
                data: cases,
                borderColor: ['rgb(209, 153, 10, 0.2)'],
                backgroundColor: ['rgb(209, 153, 10, 0.2)'],
                pointBackgroundColor: 'rgb(209, 153, 10, 0.2)',
                pointBorderColor: ' rgb(209, 153, 10, 0.2)'
            },
            {
                label: 'Deaths',
                data: deaths,
                borderColor: ['rgb(148, 11, 11, 0.2)'],
                backgroundColor: ['rgb(148, 11, 11, 0.2)'],
                pointBackgroundColor: 'rgb(148, 11, 11, 0.2)',
                pointBorderColor: 'rgb(148, 11, 11, 0.2)'
            },
            {
                label: 'Recovered',
                data: recovered,
                borderColor: ['rgb(11, 114, 20, 0.4)'],
                backgroundColor: ['rgb(11, 114, 20, 0.4)'],
                pointBackgroundColor: 'rgb(11, 114, 20, 0.4)',
                pointBorderColor: 'rgb(11, 114, 20, 0.4)'
            }
        ],
    }
    const options = {
        title: {
            display: true,
            text: 'Total cases over time',
            fontColor: 'white',
            fontSize: 20
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 120000000,
                        stepSize: 20000000,
                        fontColor: "white",
                    },
                }
            ],
            xAxes: [{
                gridLines: {
                    display: true,
                },
                ticks: {
                    fontColor: "white",
                }
            }],
        },
        legend: {
            labels: {
                fontSize: 13,
                fontColor: 'white'
            }
        },
        maintainAspectRatio:false
    }
    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart