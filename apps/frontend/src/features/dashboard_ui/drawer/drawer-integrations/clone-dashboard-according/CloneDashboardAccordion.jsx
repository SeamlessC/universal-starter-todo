import { Accordion, createStyles } from '@mantine/core'
import AccordionData from './AccordionData';
import AccordionFixedData from './AccordionFixedData';

const useStyle = createStyles((theme) => ({
  sourceInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 0px"
  }
}))

function CloneDashboardAccordion({sources, sourcesData}) {
  const { classes, theme } = useStyle()

  return (
    <Accordion 
      variant="filled" 
      defaultValue={sources[0].label}
    >
      {
        sources.map((s, i) => {
          return <Accordion.Item key={i} value={s.label}>
            <Accordion.Control icon={<img src={s.img} width={30}/>}>{s.label}</Accordion.Control>
            <Accordion.Panel>
              <AccordionFixedData />
              <AccordionData sourcesInfoData={sourcesData} />
            </Accordion.Panel>
          </Accordion.Item>
        })
      }
    </Accordion>
  )
}

export default CloneDashboardAccordion