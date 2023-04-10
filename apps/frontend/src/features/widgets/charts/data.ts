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

export const TopChannels = [
  {
    color: "red",
    channel: "jgje aweihfkiw uwef",
    sessions: 400, 
  },
  {
    color: "green",
    channel: "jgje aweihfkiw uwef",
    sessions: 300, 
  },
  {
    color: "pink",
    channel: "jgje aweihfkiw uwef",
    sessions: 778, 
  },
  {
    color: "blue",
    channel: "jgje aweihfkiw uwef",
    sessions: 180, 
  },
];

export const TopCampaigns = [
  {
    campaign: "jgje aweihfkiw uwef",
    impressions: 400, 
    changeOfImpressions: -300,
    clicks: 34,
    changeOfClicks: 32,
    conversation: 210,
    changeOfConversation: -10,
    costConvo: 445,
    changeOfCostConvo: 55,
  },
  {
    campaign: "Maneesha ajehgjaew",
    impressions: 300, 
    changeOfImpressions: -80,
    clicks: 6,
    changeOfClicks: 3,
    conversation: 80,
    changeOfConversation: 10,
    costConvo: 45,
    changeOfCostConvo: -5,
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