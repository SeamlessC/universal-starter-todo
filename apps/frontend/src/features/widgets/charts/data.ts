import { faker } from '@faker-js/faker'

export var chartLabels: string[] = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun", 
    "Jul", 
    "Aug", 
    "Sep", 
    "Oct", 
    "Nov", 
    "Dec"
];

export const pieChartColors: string[] = [
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
];

export const multiLineChartData = [
    {
      label: "Values",
      data: chartLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "blue",
      borderColor: "blue",
      pointStyle: 'circle',
      pointHoverRadius: 4,
      lineTension: 0.5
    },
];

export const singleLineChartData = [
    {
      label: "Values",
      data: chartLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "blue",
      borderColor: "blue",
      pointStyle: 'circle',
      pointHoverRadius: 4,
      lineTension: 0.5
    },
    {
      label: "Values",
      data: chartLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "orange",
      borderColor: "orange",
      pointStyle: 'circle',
      pointHoverRadius: 4,
      lineTension: 0.5
    },
];