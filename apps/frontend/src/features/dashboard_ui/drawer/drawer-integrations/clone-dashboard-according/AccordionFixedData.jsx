import { createStyles, Text, ActionIcon } from '@mantine/core'
import plus from '../../../../../assets/plus.png';

const useStyle = createStyles((theme) => ({
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "0 0px"
    }
  }))

function AccordionFixedData() {
  const { classes, theme } = useStyle()  

  return (
    <div className={classes.infoContainer}>
        <Text c="dimmed">aeergaer</Text>
        <ActionIcon>
            <img src={plus} width={15} />
        </ActionIcon>
    </div>
  )
}

export default AccordionFixedData