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

export const sortingTableData = [
  {
    endagementRate: 3.84,
    totalReactions: 45,
    postComments: 67,
    postShares: 1,
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    text: "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically ",
  },
  {
    endagementRate: 3.84,
    totalReactions: 45,
    postComments: 67,
    postShares: 1,
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    text: "A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Websites are typically ",
  },
];


export const companies = [
  {
    "id": "ab1e3aa6-3116-4e0d-a33d-9262aac86747",
    "name": "Pfeffer and Sons",
    "streetAddress": "91877 Greenholt Cove",
    "city": "Tyler",
    "state": "MA",
    "missionStatement": "strategize intuitive infrastructures"
  },
  {
    "id": "6c2c52f1-e197-4892-ae8e-5b5e42c226cb",
    "name": "Hettinger, Willms and Connelly",
    "streetAddress": "353 Cremin Via",
    "city": "Deltona",
    "state": "NJ",
    "missionStatement": "mesh sexy synergies"
  },
  {
    "id": "9a2e51e0-5bbe-49af-a748-546509792e28",
    "name": "Champlin - Spencer",
    "streetAddress": "5587 Jerde Hollow",
    "city": "Deerfield Beach",
    "state": "IN",
    "missionStatement": "incentivize end-to-end e-markets"
  },
  {
    "id": "41e6105b-1115-4414-aaa6-ace1944ab3f2",
    "name": "Zulauf, McLaughlin and Jaskolski",
    "streetAddress": "673 Malinda Villages",
    "city": "Georgetown",
    "state": "SD",
    "missionStatement": "revolutionize holistic action-items"
  },
  {
    "id": "dcc6476c-2b6c-4acd-955f-32a0337b5832",
    "name": "Shanahan - Turcotte",
    "streetAddress": "29879 Braun Harbors",
    "city": "McLean",
    "state": "MT",
    "missionStatement": "reinvent visionary markets"
  },
  {
    "id": "ccdbb85d-2175-4865-a69c-a76557216364",
    "name": "Gutkowski Inc",
    "streetAddress": "964 Immanuel Views",
    "city": "Flagstaff",
    "state": "AL",
    "missionStatement": "mesh e-business schemas"
  },
  {
    "id": "19df3e35-1577-48a7-9e2f-f79c4f6c36ef",
    "name": "Stark Inc",
    "streetAddress": "42353 Kovacek Terrace",
    "city": "Jupiter",
    "state": "MI",
    "missionStatement": "facilitate enterprise infomediaries"
  },
  {
    "id": "5e50f063-6620-491c-904c-fe8e40488802",
    "name": "Schmidt and Sons",
    "streetAddress": "8478 Kulas Park",
    "city": "Peoria",
    "state": "MO",
    "missionStatement": "revolutionize e-business platforms"
  },
  {
    "id": "a46de859-251b-42f6-a6c4-1642beba6b56",
    "name": "Mohr - Raynor",
    "streetAddress": "19858 Arianna Views",
    "city": "Battle Creek",
    "state": "VT",
    "missionStatement": "synergize global blockchains"
  },
  {
    "id": "06f55c10-2481-4b5d-9a70-d8845f5e1381",
    "name": "Tromp, Runolfsson and Bahringer",
    "streetAddress": "83031 Kling Drive",
    "city": "Frisco",
    "state": "OK",
    "missionStatement": "incubate bricks-and-clicks communities"
  }
];


export const StatData = {
  "data": [
    {
      "title": "Revenue",
      "icon": "receipt",
      "value": "13,456",
      "diff": 34
    },
    {
      "title": "Profit",
      "icon": "coin",
      "value": "4,145",
      "diff": -13
    },
    {
      "title": "Coupons usage",
      "icon": "discount",
      "value": "745",
      "diff": 18
    },
    {
      "title": "New customers",
      "icon": "user",
      "value": "188",
      "diff": -30
    }
  ]
};

export const progressBarData = [
  {val: 100, color: "pink"},
  {val: 250, color: "blue"},
  {val: 500, color: "green"},
  {val: 90, color: "red"},
  {val: 78, color: "orange"},
];