import { createStyles, Group, ScrollArea, Text, Title } from '@mantine/core'
import Btn from '../../profile-ui/Btn'
import Search from '../../widgets/Search'
import { CVSAccordion } from './CVSAccordion'

const useStyele = createStyles((theme) => ({
    
  }))

function CVSFileManager() {
  const { classes, theme } = useStyele()

  return (
    <div>
        <Group position="apart">
            <Title>CVS File Manager</Title>
            <Btn label="Create CVS Template" />
        </Group>
        <Group position="apart">
            <Text>CVS Template Presets</Text>
            <Search placeholder="search for cvs files..." />
        </Group>
        <ScrollArea>
            <CVSAccordion />
        </ScrollArea>
    </div>
  )
}

export default CVSFileManager