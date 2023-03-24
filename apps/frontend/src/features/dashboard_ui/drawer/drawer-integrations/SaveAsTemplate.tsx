import { createStyles, Flex, Spoiler, Text, Textarea, TextInput } from '@mantine/core'
import Icon from '../../../../assets/blank.png'
import CusButton from '../../Button'

const useStyle = createStyles((theme) => ({
    title: {
        fontWeight: 600,
    },
    inputBox: {
        margin: "4% 0%",
    },
    textDetail: {
        color: theme.colors.gray[6],
    }
}))

function SaveAsTemplate() {
  const { classes, theme } = useStyle()  
  return (
    <div>
        <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
            style={{paddingTop: "4%"}}
        >
            <img src={Icon} width={30} />  
            <Text className={classes.title}>Save As Template</Text>
        </Flex>
        <div className={classes.inputBox}>
            <TextInput label="Template Name" />
            <Textarea label="Template Description" minRows={4} />
            <CusButton label='Create Template' />
        </div>
        <Spoiler maxHeight={100} hideLabel="hide" showLabel="Read more Details Here" className={classes.textDetail}>
            sthiae aeilh aeiurh aeh;aeih ae;ih;aeh ae;ih h;ioaeh eiháe ae;innerHei 
            ueg aiuerh aeihu aehiuaeh aeiuhae heaiahg aeih; aeihn;ae ;aeinh; aehiaeia 
            sthiae aeilh aeiurh aeh;aeih ae;ih;aeh ae;ih h;ioaeh eiháe ae;innerHei 
            sthiae aeilh aeiurh aeh;aeih ae;ih;aeh ae;ih h;ioaeh eiháe ae;innerHei 
            ueg aiuerh aeihu aehiuaeh aeiuhae heaiahg aeih; aeihn;ae ;aeinh; aehiaeia 
            thiae aeilh aeiurh aeh;aeih ae;ih;aeh ae;ih h;ioaeh eiháe ae;innerHei 
        </Spoiler>
    </div>
  )
}

export default SaveAsTemplate