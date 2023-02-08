import { Accordion, Checkbox, createStyles, Text, Grid, MantineTheme } from '@mantine/core';
import DashboardAccordionData from './DashboardAccordionData';
 

const getAccordion = ( type: string, displayInfo: { displayInfo: { name: string; icon: string|null; data: { name: string; }[]; }[]; } ) => {
    return displayInfo.displayInfo.map((e, i) => {
      return (
        <Accordion.Item 
          value={e.name} 
          style={{border: 0}} 
          key={i}
        >
            <Accordion.Control icon={e.icon != null ? <img src={e.icon} width={30} /> : null}>{e.name}</Accordion.Control>
            <Accordion.Panel>
              <DashboardAccordionData type={type} data1={e.data} />
            </Accordion.Panel>
          </Accordion.Item>
      );
    })
  }

function DashboardAccordion( displayInfo: { type: string, displayInfo: { name: string; icon: string|null; data: { name: string; }[]; }[]; }) {
  return (
    <Accordion variant="separated" radius="xs" defaultValue={displayInfo.displayInfo[0].name} style={{marginTop: '10px'}}>
  	    { getAccordion(displayInfo.type, displayInfo) }
    </Accordion>
  )
}

export default DashboardAccordion