import { Anchor, createStyles, Group, Text, TextInput  } from '@mantine/core'
import Search from '../../../assets/search.png';
import FacebookIcon from '../../../assets/facebook.png';
import AdReport from '../../../assets/ad_report.png';
import DashboardAccordion from '../DashboardAccordion';
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
  presetContainer: {
    padding: "20px",
  }
}));

const presetInfo = [
  {
    name: "Facebook Insights",
    icon: FacebookIcon,
    data: [
      {name: "HTL Group",},
      {name: "ASD",},
      {name: "SeamlessC",},
      {name: "MMMMMM",},
    ],
  },
  {
    name: "Google Analytics",
    icon: AdReport,
    data: [
      {name: "ASD",},
      {name: "SeamlessC",},
      {name: "MMMMMM",},
    ],
  },
  {
    name: "Google Insights",
    icon: AdReport,
    data: [
      {name: "1111111111",},
      {name: "SeamlessC",},
      {name: "PKIIKMHHG",},
    ],
  },
];


const DrawerPresets = ( set: {showBody: string, popUpLabel: string|null }) => {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.presetContainer}>
      {
        set.popUpLabel != null ? 
         <Group style={{marginBottom: "10px"}}>
            <img src={AdReport} width={30} />
            <Text>{set.popUpLabel}</Text>
         </Group>
        : null
      }

      <TextInput
        className={classes.search}
        placeholder="Search"
        icon={<img src={Search} width={20} />}
      />

      {
        set.showBody == "default" ?
          <div>
            <DashboardAccordion type='preset' displayInfo={presetInfo} />
            <Group className={classes.navToIntegrateLink}>
              <Text>Need to connect more integrations?</Text>
              <Anchor>Go To integrations</Anchor>
            </Group>
          </div>
        : set.showBody == "Fix Dashboard Errors" ?
          <FixDashboardErrors /> 
        : set.showBody == "Save As Template" ?
          <SaveAsTemplate />
        : <div></div>   
      }
    </div>
  )
}

export default DrawerPresets