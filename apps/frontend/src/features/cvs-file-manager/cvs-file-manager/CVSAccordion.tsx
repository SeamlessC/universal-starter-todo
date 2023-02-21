import { Accordion, AccordionControlProps, ActionIcon, Box, createStyles, Group } from '@mantine/core';

import Btn from '../../profile-ui/Btn';
import CustomeLink from '../../profile-ui/Links';

const useStyele = createStyles((theme) => ({
    accordionLinksGroup: {
        width: "60%",
        marginRight: "2%"
    },
    accordionLink: {
        justifyContent: "center", 
        alignItems: "center"
    },
}))

function AccordionControl(props: AccordionControlProps) {
    const { classes, theme } = useStyele()

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Accordion.Control {...props} />
        <Group className={classes.accordionLinksGroup} position="apart">
            <div className={classes.accordionLink}>
                <CustomeLink label="View Template" />
            </div>
            <div className={classes.accordionLink}>
                <CustomeLink label="Send by mail" />
            </div>
            <div className={classes.accordionLink}>
                <Btn label="Add a CVS" />
            </div>
        </Group>
      </Box>
    );
}

const AccordionData = () => {

}

export function CVSAccordion() {
  return (
    <Accordion variant="separated" chevronPosition="left" defaultValue="customization">
      <Accordion.Item value="customization">
        <AccordionControl>Customization</AccordionControl>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <AccordionControl>Flexibility</AccordionControl>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <AccordionControl>No annoying focus ring</AccordionControl>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}