import { Anchor, createStyles, TextInput } from '@mantine/core'
import DashboardAccordion from '../DashboardAccordion'
import Search from '../../../assets/search.png';
import AdReport from '../../../assets/ad_report.png';

const useStyles = createStyles((theme) => ({
  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  navToIntegrateLink: {

  }
}));

const widgetInfo = [
  {
    name: "Custom Widgets",
    icon: AdReport,
    data: [
      {name: "Pie Chart", icon: AdReport},
      {name: "Trend", icon: AdReport},
      {name: "Stacked Columns", icon: AdReport},
      {name: "Gauge", icon: AdReport},
      {name: "Pie Chart", icon: AdReport},
      {name: "Trend", icon: AdReport},
      {name: "Stacked Columns", icon: AdReport},
      {name: "Gauge", icon: AdReport},
    ],
  },
  {
    name: "Static Widgets",
    icon: AdReport,
    data: [
      {name: "Pie Chart", icon: AdReport},
      {name: "Trend", icon: AdReport},
      {name: "Stacked Columns", icon: AdReport},
      {name: "Gauge", icon: AdReport},
    ],
  },
];

function DrawerWidgets() {
  const { classes, theme } = useStyles()

  return (
    <>
      <TextInput
        className={classes.search}
        placeholder="Search"
        icon={<img src={Search} width={20} />}
      />

      <DashboardAccordion type='widget' displayInfo={widgetInfo} />
    </>
  )
}

export default DrawerWidgets