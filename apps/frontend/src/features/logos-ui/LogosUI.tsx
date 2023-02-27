import { ActionIcon, createStyles, Grid, Group, ScrollArea, Title } from '@mantine/core'
import { useState } from 'react'
import Btn from '../profile-ui/Btn'
import Search from '../widgets/Search'
import OrderIcon from '../../assets/order-icon.png'
import LayoutIcon from '../../assets/layout-icon.png'

import Youtube from '../../assets/youtube-icon.png'
import Twitter from '../../assets/twitter-icon.png'
import Facebook from '../../assets/facebook-icon.png'
import Fire from '../../assets/fire-icon.png'
import LogoViewer from './LogoViewer'
import LogoEditor from './LogoEditor'

const useStyle = createStyles((theme) => ({
    height: {
        height: (window.innerHeight/3)*2,
    },
    sideContainer: {
        height: (window.innerHeight/3)*2,
        background: theme.white,
        display: "flex",
        justifyContent: "center",
    }
}))

const Logos = [
    {icon: Youtube, name: "youtube"},
    {icon: Facebook, name: "Facebook"},
    {icon: Fire, name: "Fire"},
    {icon: Youtube, name: "youtube"},
    {icon: Facebook, name: "Facebook"},
    {icon: Fire, name: "Fire"},
]

function LogosUI() {
  const { classes, theme } = useStyle()
  const [selectLogo, setSelectLogo] = useState()

  return (
    <>
        <Group position="apart" mt={30}>
            <Title>Logo Manager</Title>
            <Btn label="Upload Logo" btnWidth='30%' />
        </Group>
        <Group position="apart" mt={30}>
            <Search placeholder="Search for csv files..." />
            <Group mr={30}>
                <ActionIcon>
                    <img src={OrderIcon} />
                </ActionIcon>
                <ActionIcon>
                    <img src={LayoutIcon} />
                </ActionIcon>
            </Group>
        </Group>
        <Grid mt={20} className={classes.height}>
            <Grid.Col md={12} lg={8}>
                <ScrollArea className={classes.height}>
                    <LogoViewer imgs={Logos} selectLogo={selectLogo} setSelectLogo={setSelectLogo} />
                </ScrollArea>
            </Grid.Col>
            <Grid.Col md={12} lg={4} className={classes.sideContainer}>
                <LogoEditor selectLogo={selectLogo} imgs={Logos} />
            </Grid.Col>
        </Grid>
    </>
  )
}

export default LogosUI