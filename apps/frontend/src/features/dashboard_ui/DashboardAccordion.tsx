import { Accordion, Checkbox, createStyles, Text, Grid, MantineTheme } from '@mantine/core';
import DashboardAccordionData from './DashboardAccordionData';

const useStyles = createStyles((theme) => ({
    gridBottomBorder: {
      marginTop: "10px",
      borderBottom: `1px solid ${theme.colors.red[2]}`,
    },
  })); 


  // const getData = (data1: { name: string; }[], theme: MantineTheme, classes: any) => {
  //   return data1.map((e, i) => {
  //     return (
  //       <Grid key={i} className={classes.gridBottomBorder}>
  //         <Grid.Col span={11}>
  //           <Text style={{color: theme.colors.gray[7]}}>{e.name}</Text>
  //         </Grid.Col>
  //         <Grid.Col span={1}>
  //           <Checkbox
  //             key={i}
  //             radius="xs"
  //             color="orange"
  //           />
  //         </Grid.Col>
  //       </Grid>
  //     );
  //   });
  // }  

const getAccordion = ( type: string, theme: MantineTheme, classes: any, displayInfo: { displayInfo: { name: string; icon: string; data: { name: string; }[]; }[]; } ) => {
    return displayInfo.displayInfo.map((e, i) => {
      return (
        <Accordion.Item 
          value={e.name} 
          style={{border: 0}} 
          key={i}
        >
            <Accordion.Control icon={<img src={e.icon} width={30} />}>{e.name}</Accordion.Control>
            <Accordion.Panel>
              {/* { getData(e.data, theme, classes) } */}
              <DashboardAccordionData type={type} data1={e.data} />
            </Accordion.Panel>
          </Accordion.Item>
      );
    })
  }

function DashboardAccordion( displayInfo: { type: string, displayInfo: { name: string; icon: string; data: { name: string; }[]; }[]; }) {
  const { classes, theme } = useStyles();

  console.log(displayInfo)

  return (
    <Accordion variant="separated" radius="xs" defaultValue={displayInfo.displayInfo[0].name} style={{marginTop: '10px'}}>
  	    { getAccordion(displayInfo.type, theme, classes, displayInfo) }
    </Accordion>
  )
}

export default DashboardAccordion