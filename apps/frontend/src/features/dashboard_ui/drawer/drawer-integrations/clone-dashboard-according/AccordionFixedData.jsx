import { createStyles, Text, Button } from '@mantine/core'

const useStyle = createStyles((theme) => ({
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "10px 0px"
    }
  }))

function AccordionFixedData() {
  const { classes, theme } = useStyle()  

  return (
    <div className={classes.infoContainer}>
        <Text c="dimmed">aeergaer</Text>
        <Button variant="outline">
          Replace
        </Button>
    </div>
  )
}

export default AccordionFixedData