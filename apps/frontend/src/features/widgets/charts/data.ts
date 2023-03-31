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


export const listViewData = [
  {
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    text: "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically ",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    text: "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    text: "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically",
  },
];