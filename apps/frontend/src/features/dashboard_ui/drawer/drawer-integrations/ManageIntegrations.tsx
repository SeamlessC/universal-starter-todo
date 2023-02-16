import fbIcon from '../../../../assets/facebook.png';
import customeSources from '../../../../assets/custom-data-sources.png';
import twitterIcon from '../../../../assets/twitter.png';

import { DashboardAccordion } from '../../../home/dashboard-add-data-sources/DashboardAccordion';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  dashboardAccordion: {
    width: "100%",
  }
}))

const sourcesTypes = [
  {label: "Facebook Ads", img: fbIcon},
  {label: "Facebook Insights", img:fbIcon},
  {label: "Twitter", img: twitterIcon},
  {label: "Custom Data Source", img: customeSources},
];

const sourcesInfoData = [
  {text: "Maneesha"},
  {text: "Lakshani"},
  {text: "ABCD"},
  {text: "Maneesha Lakshani"},
];

function ManageIntegrations() {
  const { classes, theme } = useStyles()

  return (
      <DashboardAccordion 
      sourcesInfoData={sourcesInfoData} 
      sourcesTypes={sourcesTypes} 
      overrallWidth="100%"
    />
  )
}

export default ManageIntegrations