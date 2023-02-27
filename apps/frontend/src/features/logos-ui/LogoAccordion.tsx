import { Accordion, Center, createStyles, Group, Text, UnstyledButton } from '@mantine/core';
import IconAndTextBtn from '../widgets/IconAndTextBtn';

import BlackVideoSkimmingIcon from '../../assets/black-video-skimming-icon.png'
import BlackCropIcon from '../../assets/black-crop-icon.png'
import BlackDeleteIcon from '../../assets/black-delete-icon.png'

const useStyles = createStyles((theme) => ({
    decorations: {
       borderLeft: 0,
       borderRight: 0,
       borderBottom: 0, 
    },
    iconBox: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
    }
}))

export function LogoAccordion() {
  const { classes, theme } = useStyles()

  return (
    <Accordion defaultValue="actions" variant="separated">
      <Accordion.Item value="actions" className={classes.decorations}>
        <Accordion.Control>Actions</Accordion.Control>
        <Accordion.Panel>
            <Center>
              <div className={classes.iconBox}>
                  <IconAndTextBtn label="Rename" icon={BlackVideoSkimmingIcon} />
                  <IconAndTextBtn label="Crop" icon={BlackCropIcon} />
                  <IconAndTextBtn label="Delete" icon={BlackDeleteIcon} />
              </div>
            </Center>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="file-info" className={classes.decorations}>
        <Accordion.Control>File Info</Accordion.Control>
        <Accordion.Panel>
          
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}