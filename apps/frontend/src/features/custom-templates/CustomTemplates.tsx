import { createStyles, Flex, Group, ScrollArea, Title } from '@mantine/core'
import Btn from '../profile-ui/Btn'
import Search from '../widgets/Search'
import CustomeTemplatesTable from './CustomeTemplatesTable'

const useStyles = createStyles((theme) => ({
    marginTop: {
        marginTop: "4%",
    }
}))

function CustomTemplates() {
  const { classes, theme } = useStyles()

  return (
    <div>
        <Group position="apart" className={classes.marginTop}>
            <Title fw={700}>Custom Templates</Title>
            <Btn label="Create Template" btnWidth="30%" />
        </Group>
        <Flex 
            mt={20}
            justify="flex-end"
            align="center"
        >
            <Search placeholder="Search for templates...." />
        </Flex>
        <ScrollArea>
            <CustomeTemplatesTable />
        </ScrollArea>
    </div>
  )
}

export default CustomTemplates