import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import "chart.js/auto";

function AreaChart() {
    const [userData, setUserData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Amount",
            data: [20000, 3500, 2800, 5000, 8000, 1290],
            backgroundColor: 'rgba(235, 52, 52, 0.5)',
            borderColor: "red",
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

export default AreaChart