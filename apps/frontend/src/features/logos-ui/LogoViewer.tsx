import { ActionIcon, createStyles, Grid, Group } from '@mantine/core'

import DeleteIcon from '../../assets/white-delete-icon.png'
import CropIcon from '../../assets/white-crop-icon.png'
import SkimmingIcon from '../../assets/white-video-skimming-icon.png'
import IconBtn from '../widgets/IconBtn'

const useStyle = createStyles((theme) => ({
    imgBox: {
        position: "relative",
    },
    img: {
        width: "100%",
        height: ((window.innerHeight/3)*2)/4,
        background: theme.white,
        borderRadius: theme.radius.md,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    iconBtnBox: {
        position: "absolute",
        bottom: 13,
        right: 10,
        display: "flex",
        flexDirection: "row"
    },
}))

function LogoViewer(data: {imgs: string[]}) {
  const { classes, theme } = useStyle()

  return (
    <Grid gutter="xs" columns={25}>
        {
            data.imgs.map((e, index) => {
                return (
                    <Grid.Col lg={5} md={5} sm={10} className={classes.imgBox}>
                        <div className={classes.img}>
                            <img src={e}  />
                            <div className={classes.iconBtnBox}>
                                <IconBtn icon={SkimmingIcon} />
                                <IconBtn icon={DeleteIcon} />
                                <IconBtn icon={CropIcon} />
                            </div>
                        </div>
                    </Grid.Col>
                )
            })
        }
    </Grid>
  )
}

export default LogoViewer