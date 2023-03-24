import customeSources from '../../../../assets/custom-data-sources.png';
import twitterIcon from '../../../../assets/twitter.png';

import { DashboardAccordion } from '../../../home/dashboard-add-data-sources/DashboardAccordion';
import { createStyles } from '@mantine/core';
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

function ManageIntegrations() {
  const { classes, theme } = useStyles()

  return (
    <div>
      <DashboardAccordion 
        sourcesInfoData={sourcesInfoData} 
        sourcesTypes={sourcesTypes} 
        overrallWidth="100%"
      />
      <ConnectMoreDataSources 
        sourcesTypes={sourcesTypes} 
        InfoData={sourcesInfoData} 
        overrallWidth="100%"
      />
    </div>
  )
}

export default ManageIntegrations