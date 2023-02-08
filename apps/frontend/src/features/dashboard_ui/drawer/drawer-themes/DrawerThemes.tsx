import { createStyles, ScrollArea } from '@mantine/core'
import React from 'react'
import AdReport from '../../../../assets/ad_report.png';
import DashboardAccordion from '../../DashboardAccordion';
import DrawerCustomeThemes from './DrawerCustomeThemes';
import FixDashboardErrors from '../drawer-integrations/FixDashboardErrors';
import SaveAsTemplate from '../drawer-integrations/SaveAsTemplate';

const useStyles = createStyles((theme) => ({
  themeContainer: {
    padding: "0 20px",
  },
}))

const presentThemeAccordionData = [
  {
    name: "Preset Themes",
    icon: null,
    data: [
      {name: "Pie Chart", icon: AdReport},
      {name: "Trend", icon: AdReport},
      {name: "Stacked Columns", icon: AdReport},
      {name: "Gauge", icon: AdReport},
      {name: "Pie Chart", icon: AdReport},
      {name: "Trend", icon: AdReport},
    ],
  },
];

function DrawerThemes(themeInfo: {showBody: string}) {
  const { classes, theme } = useStyles()

  return (
    <ScrollArea>
      <div className={classes.themeContainer}>
        {
          themeInfo.showBody == "default" ?
            <div>
              <DashboardAccordion type='presentTheme' displayInfo={presentThemeAccordionData} />
              <DrawerCustomeThemes />
            </div>
          : themeInfo.showBody == "Fix Dashboard Errors" ?
            <FixDashboardErrors /> 
          : themeInfo.showBody == "Save As Template" ?
            <SaveAsTemplate />
          : <div></div>   
        }
        {/* <DashboardAccordion type='widget' displayInfo={widgetInfo} /> */}
      </div>
    </ScrollArea>
  )
}

export default DrawerThemes