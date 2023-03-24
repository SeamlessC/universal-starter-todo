import { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import "chart.js/auto";

function PieChart() {
    const [userData, setUserData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Amount",
            data: [20000, 3500, 2800, 5000, 8000, 1290, 8000, 3789, 2754, 9756, 11876, 5673],
            backgroundColor: [
                "darkRed",
                "green",
                "blue",
                "darkPink",
                "red",
                "orange",
                "purple",
                "gold",
                "darkBlue",
                "pink",
                "lightGreen",
                "lightBlue"
            ],
            borderColor: [
                "darkRed",
                "green",
                "blue",
                "darkPink",
                "red",
                "orange",
                "purple",
                "gold",
                "darkBlue",
                "pink",
                "lightGreen",
                "lightBlue"
            ],
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
    <Pie 
        style={{height: "100%"}}
        data={userData}
        options={{
            plugins:{
              legend: {
                position: 'bottom',
                
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

export default PieChart