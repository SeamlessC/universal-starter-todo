import { Anchor, createStyles, ScrollArea, TextInput } from '@mantine/core'
import DashboardAccordion from '../DashboardAccordion'
import Search from '../../../assets/search.png';
import AdReport from '../../../assets/ad_report.png';
import FixDashboardErrors from './drawer-integrations/FixDashboardErrors';
import SaveAsTemplate from './drawer-integrations/SaveAsTemplate';

const useStyles = createStyles((theme) => ({
  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  navToIntegrateLink: {

  },
  drawerContainer: {
    padding: "20px",
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

function DrawerWidgets(drawerInfo: {showBody: string}) {
  const { classes, theme } = useStyles()

  return (
    // <ScrollArea>
      <div className={classes.drawerContainer}>
        <TextInput
          className={classes.search}
          placeholder="Search"
          icon={<img src={Search} width={20} />}
        />
  
        {
          drawerInfo.showBody == "default" ?
            <DashboardAccordion type='widget' displayInfo={widgetInfo} />
          : drawerInfo.showBody == "Fix Dashboard Errors" ?
            <FixDashboardErrors /> 
          : drawerInfo.showBody == "Save As Template" ?
            <SaveAsTemplate />
          : <div></div>   
        }
        {/* <DashboardAccordion type='widget' displayInfo={widgetInfo} /> */}
      </div>
    // </ScrollArea>
  )
}

export default DrawerWidgets