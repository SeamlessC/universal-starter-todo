import { Anchor, createStyles, Group, Text, TextInput  } from '@mantine/core'
import Search from '../../../assets/search.png';
import FacebookIcon from '../../../assets/facebook.png';
import AdReport from '../../../assets/ad_report.png';
import DashboardAccordion from '../DashboardAccordion';

const useStyles = createStyles((theme) => ({
  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  navToIntegrateLink: {

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


const DrawerPresets = () => {
  const { classes, theme } = useStyles();

  return (
    <div>
      <TextInput
        className={classes.search}
        placeholder="Search"
        icon={<img src={Search} width={20} />}
      />

      <DashboardAccordion type='preset' displayInfo={presetInfo} />

      <Group className={classes.navToIntegrateLink}>
        <Text>Need to connect more integrations?</Text>
        <Anchor>Go To integrations</Anchor>
      </Group>
    </div>
  )
}

export default DrawerPresets