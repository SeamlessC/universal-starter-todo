import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import "chart.js/auto";
import { chartLabels } from './data';
import { faker } from '@faker-js/faker'

function LineChartUI(info: {data: any}) {
    const [userData, setUserData] = useState({
        labels: chartLabels,
        datasets: info.data,
    })

      //tooltip title
      const title = (tooltipItems: any) => {
        return 'Age at ' + tooltipItems[0].label;
      }  

  return (
    <Line 
        style={{height: "100%", width: "100%"}}
        data={userData}
        options={{
            plugins:{
              legend: {
                position: 'bottom',
                display: false
              },
              tooltip: {
                callbacks: {
                  title: title,
                },
                backgroundColor: 'rgba(232, 233, 235)',
                footerColor: 'red',
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

export default LineChartUI