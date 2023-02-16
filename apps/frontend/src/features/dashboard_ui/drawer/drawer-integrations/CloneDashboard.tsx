import { createStyles } from '@mantine/core';

import customeSources from '../../../../assets/custom-data-sources.png';
import twitterIcon from '../../../../assets/twitter.png';
import CloneDashboardAccordion from './clone-dashboard-according/CloneDashboardAccordion';
import { ConnectMoreDataSources } from './ConnectMoreDataSources';

const useStyles = createStyles((theme) => ({
  dashboardAccordion: {
    width: "100%",
  }
}))

const sourcesTypes = [
  {label: "Twitter", img: twitterIcon},
  {label: "Custom Data Source", img: customeSources},
];

const sourcesInfoData = [
  {text: "Maneesha"},
  {text: "Lakshani"},
  {text: "ABCD"},
  {text: "Maneesha Lakshani"},
];

function CloneDashboard() {
  const { classes, theme } = useStyles()

  return (
    <div>
      <CloneDashboardAccordion sources={sourcesTypes} sourcesData={sourcesInfoData} />

      <ConnectMoreDataSources 
        sourcesTypes={sourcesTypes} 
        InfoData={sourcesInfoData} 
        overrallWidth="100%"
      />
    </div>
  )  
}

export default CloneDashboard