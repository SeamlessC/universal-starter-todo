import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import "chart.js/auto";
import { chartLabels, pieChartColors } from './data';
import { faker } from '@faker-js/faker'

function DoughnutChart() {
    const [userData, setUserData] = useState({
        labels: chartLabels,
        datasets: [
          {
            label: "Amount",
            data: chartLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: pieChartColors,
            borderColor: pieChartColors,
          },
        ]
    })
    
    //tooltip title
    const title = (tooltipItems: any) => {
        return 'Value at ' + tooltipItems[0].label;
    }  

  return (
    <Doughnut 
        style={{height: "100%", width: "100%"}}
        data={userData}
        options={{
            plugins:{
              tooltip: {
                callbacks: {
                  title: title,
                },
                backgroundColor: 'rgba(232, 233, 235)',
                bodyColor: 'black',
                titleColor: 'black',
                padding: 10
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
        }}
    />
  )
}

export default DoughnutChart;