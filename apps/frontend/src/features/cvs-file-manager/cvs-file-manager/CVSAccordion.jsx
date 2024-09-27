import { Accordion, Box, createStyles, List, Group, Text } from '@mantine/core';
import { useState } from 'react';

import CustomeLink from '../../profile-ui/Links';
import { FileBtn } from '../../widgets/FileBtn';
import CVSAccordionData from './CVSAccordionData';

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

function AccordionControl({name, setfiles}) {
  const { classes, theme } = useStyele()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control>{name}</Accordion.Control>
      <Group className={classes.accordionLinksGroup} position="apart">
          <div className={classes.accordionLink}>
              <CustomeLink label="View Template" />
          </div>
          <div className={classes.accordionLink}>
              <CustomeLink label="Send by mail" />
          </div>
          <div className={classes.accordionLink}>
            <FileBtn label="Add a CVS" setFiles={setfiles} />
          </div>
      </Group>
    </Box>
  );
}

const AccordionData = (headers, setfiles, data) => {
    return headers.map((e,  i) => {
        return (
          <Accordion.Item value={e.name} key={i}>
            <AccordionControl setfiles={setfiles} name={e.name}>{e.name}</AccordionControl>
            <Accordion.Panel>

              {/* Newly Added file list */}
              {/* <List size="sm" mt={5} withPadding>
                {files.map((file, index) => (
                  <List.Item key={index}>{file.name}</List.Item>
                ))}
              </List> */}

              {
                data.map((ele, index) => {
                  return (
                    <CVSAccordionData name={ele.name} key={index} />
                  )
                })
              }

            </Accordion.Panel>
          </Accordion.Item>
        )
    })
}

export function CVSAccordion({headers, data}) {
  const [files, setFiles] = useState([])

  return (
    <Accordion variant="separated" chevronPosition="left" defaultValue="customization">
      { AccordionData(headers, setFiles, data) }
    </Accordion>
  );
}