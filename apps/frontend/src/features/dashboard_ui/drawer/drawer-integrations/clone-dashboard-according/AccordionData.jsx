import { createStyles, ActionIcon, Text, Divider } from '@mantine/core'
import plus from '../../../../../assets/plus.png';

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
      padding: "10px 0px"
    }
  }))

function AccordionData({sourcesInfoData}) {
  const { classes, theme } = useStyle()

  return (
    <div>
        {
            sourcesInfoData.map((e,  i) => {
                return <div key={i}>
                    <div className={classes.infoContainer}>
                        <Text c="dimmed">{e.text}</Text>
                        <ActionIcon>
                            <img src={plus} width={15} />
                        </ActionIcon>
                    </div>
                    <Divider />
                </div>
            })
        }
    </div>
  )
}

export default AccordionData