import { createStyles, Grid } from '@mantine/core'

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
        borderRadius: theme.radius.sm,
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

function LogoViewer(data: {setSelectLogo: any, selectLogo: any, imgs: {icon: string; name: string; }[]}) {
  const { classes, theme } = useStyle()

  return (
    <Grid gutter="xs" columns={25}>
        {
            data.imgs.map((e, index) => {
                return (
                    <Grid.Col 
                        lg={5} 
                        sm={8} 
                        xs={8}
                        className={classes.imgBox} 
                        key={index}
                    >
                        <div 
                            className={classes.img}
                            onClick={() => data.setSelectLogo(index)}
                            style={{border: data.selectLogo == index ? "2px solid orange" : "2px solid transparent"}}
                        >
                            <img src={e.icon}  />
                            {
                                data.selectLogo == index ?
                                <div className={classes.iconBtnBox}>
                                    <IconBtn icon={SkimmingIcon} />
                                    <IconBtn icon={DeleteIcon} />
                                    <IconBtn icon={CropIcon} />
                                </div>
                                : null
                            }
                        </div>
                    </Grid.Col>
                )
            })
        }
    </Grid>
  )
}

export default LogoViewer