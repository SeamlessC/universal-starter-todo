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
    name: "Facebook Insights",
    icon: AdReport,
    data: [
      
    ],
  },
  {
    name: "Google Analytics",
    icon: AdReport,
    data: [
      
    ],
  },
  {
    name: "Google Insights",
    icon: AdReport,
    data: [
      
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

      <DashboardAccordion displayInfo={widgetInfo} />
    </>
  )
}

export default DrawerWidgets