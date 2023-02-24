import { createStyles, Text } from '@mantine/core'

import NoImgIcon from '../../assets/no-img-icon.png'

const useStyles = createStyles((theme) => ({
    defaultImg: {
        width: "80%",
        height: "50%"
    }
}))

function LogoEditor(data: {selectLogo: number| undefined}) {
  const { classes, theme } = useStyles()

  return (
    <>
        {
            data.selectLogo == undefined ? 
                <img src={NoImgIcon} className={classes.defaultImg} />
            : <Text>EEEE</Text>    
        }
    </>
  )
}

export default LogoEditor