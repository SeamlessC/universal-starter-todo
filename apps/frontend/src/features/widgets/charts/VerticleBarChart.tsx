import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import "chart.js/auto";
import { faker } from '@faker-js/faker'

function VerticleBarChart(info: {label: string[]}) {
    const [userData, setUserData] = useState({
        labels: info.label,
        datasets: [
          {
            label: "Amount 1",
            data: info.label.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'green',
            borderColor: "green",
            pointStyle: 'circle',
            pointHoverRadius: 4,
            lineTension: 0.5,
            fill: true,
          },
          {
            label: "Amount 2",
            data: info.label.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'blue',
            borderColor: "blue",
            pointStyle: 'circle',
            pointHoverRadius: 4,
            lineTension: 0.5,
            fill: true,
          },
        ]
    })
    
      //tooltip title
      const title = (tooltipItems: any) => {
        return 'Value at ' + tooltipItems[0].label;
      }  

  return (
    <Bar 
        style={{height: "100%", width: "100%"}}
        data={userData}
        options={{
            responsive: true,
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

export default VerticleBarChart