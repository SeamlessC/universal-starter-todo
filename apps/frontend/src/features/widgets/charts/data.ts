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

export type Company = {
  id: string;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  missionStatement: string;
};

export const columns = [
  { accessor: 'name', width: '40%', sortable: true },
  { accessor: 'streetAddress', width: '60%' },
  { accessor: 'city', width: 160, sortable: true },
  { accessor: 'state', sortable: true },
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
];


export const TopPosts = [
  {
    img: "https://cdn.shopify.com/s/files/1/2439/4751/products/Notice-Please-Wipe-Down-Your-Work-Area-Regularly-Red.jpg?v=1601953916",
    imgText: "aerghakerkg adgiaeurg",
    impresions: 345, 
    engagedUsers: 400,
    name: "Display Ad with Image",
  },
  {
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg",
    imgText: "aerghakerkg ttttt",
    impresions: 37, 
    engagedUsers: 220,
    name: "Display Ad with Image",
  },
];

export const TopLandingPages = [
  {
    color: "red",
    page: "jgje aweihfkiw uwef",
    session: 345, 
  },
  {
    color: "green",
    page: "jgje aweihfkiw uwef",
    session: 10, 
  },
  {
    color: "pink",
    page: "jgje aweihfkiw uwef",
    session: 100, 
  },
  {
    color: "blue",
    page: "jgje aweihfkiw uwef",
    session: 40, 
  },
  {
    color: "brown",
    page: "jgje aweihfkiw uwef",
    session: 600, 
  },
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