import { ActionIcon, createStyles, Grid } from '@mantine/core'

import DeleteBtn from '../../assets/delete-icon.png'


const useStyle = createStyles((theme) => ({
    imgBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    img: {
        width: "100%",
        background: theme.white,
        borderRadius: theme.radius.md,
    }
}))

function LogoViewer(data: {imgs: string[]}) {
  const { classes, theme } = useStyle()

  return (
    <Grid gutter="xs" columns={25}>
        {
            data.imgs.map((e, index) => {
                return (
                    <Grid.Col lg={5} md={5} sm={12} className={classes.imgBox}>
                        <img src={e} className={classes.img} />
                        <div>
                            {/* <ActionIcon>
                                <img src={} />
                            </ActionIcon> */}
                        </div>
                    </Grid.Col>
                )
            })
        }
    </Grid>
  )
}

export default LogoViewer