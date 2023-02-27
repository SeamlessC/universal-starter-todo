import { createStyles, Input, Text } from '@mantine/core'
import { useState } from 'react'

import NoImgIcon from '../../assets/no-img-icon.png'
import { LogoAccordion } from './LogoAccordion'

const useStyles = createStyles((theme) => ({
    defaultImg: {
        width: "80%",
        height: "50%",
    },
    innerBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    selectImg: {
        marginTop: "10%",
    },
    accordion: {
        marginTop: "5%",
        width: "100%",
    }
}))

function LogoEditor(data: {selectLogo: number| undefined, imgs: { icon: string; name: string; }[]}) {
  const { classes, theme } = useStyles()
  const [edit, setEdit] = useState(false)

  return (
    <>
        {
            data.selectLogo == undefined ? 
                <img src={NoImgIcon} className={classes.defaultImg} />
            : <div className={classes.innerBox}>
                <img src={data.imgs[data.selectLogo].icon} className={classes.selectImg} />
                <div>
                    {
                        edit == false ?
                            <Text onClick={() => setEdit(true)}>
                                {data.imgs[data.selectLogo].name}
                            </Text> 
                        :
                            <Input
                                width="100%"
                                variant="unstyled"
                                defaultValue={data.imgs[data.selectLogo].name}
                            />
                    }
                </div>
                <div className={classes.accordion}>
                    <LogoAccordion />
                </div>
            </div>   
        }
    </>
  )
}

export default LogoEditor