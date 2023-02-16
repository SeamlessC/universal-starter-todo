import { createStyles, Text, TextInput } from '@mantine/core'
import Search from '../../../../assets/search.png';
import { DashboardAccordion } from '../../../home/dashboard-add-data-sources/DashboardAccordion';

const useStyles = createStyles((theme) => ({
    marginTop: {
        marginTop: "5%",
    },
    search: {
        [theme.fn.smallerThan('xs')]: {
          display: 'none',
        },
    },
}))

export function ConnectMoreDataSources(data: {sourcesTypes: any, InfoData: any, overrallWidth?: string}) {
  const { classes, theme } = useStyles()

  return (
    <div className={classes.marginTop}>
        <Text c="dimmed">
            Connect More Data Sources
        </Text>

        <TextInput
          className={classes.search}
          placeholder="Search"
          icon={<img src={Search} width={20} />}
        />

         <DashboardAccordion 
            sourcesTypes={data.sourcesTypes} 
            sourcesInfoData={data.InfoData}
            overrallWidth={data.overrallWidth} 
        />
    </div>
  )
}


