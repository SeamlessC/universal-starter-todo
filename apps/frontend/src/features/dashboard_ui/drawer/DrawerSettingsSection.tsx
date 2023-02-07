import { ActionIcon, Anchor, createStyles, Flex, Text, Popover, Button, Stack, UnstyledButton, Group, Avatar } from '@mantine/core'
import React from 'react'
import ShareIcon from '../../../assets/share-icon.png'
import EyeIcon from '../../../assets/eye-icon.png'
import SettingsIcon from '../../../assets/settings-icon.png'
import DrawerPopupBtn from './DrawerPopupBtn'

const useStyle = createStyles((theme) => ({
  settingsContainer: {
    padding: "20px",
  },
  settingsIcon:{
    marginRight: "5px",
  },
  shareLink: {
    color: `${theme.colors.orange[8]}`
  },
  eyeIcon: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  setingsIconBtn: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
}))

function DrawerSettingsSection() {
  const { classes, theme } = useStyle()

  return (
    <div className={classes.settingsContainer}>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <div style={{width: "30%"}}>
          <Anchor className={classes.shareLink}>
            <img src={ShareIcon} width={20} className={classes.settingsIcon} />
            Share Options
          </Anchor>
        </div>
        <div className={classes.eyeIcon}>
          <ActionIcon>
            <img src={EyeIcon} width={20} />
          </ActionIcon>
        </div>
        <div className={classes.setingsIconBtn}>
          <Popover width={230} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <ActionIcon>
                <img src={SettingsIcon} width={20} />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
            <Stack justify="space-around" spacing="xs" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], })}>
              <DrawerPopupBtn label="Fix Dashboard Errors" icon={ShareIcon} />
              <DrawerPopupBtn label="Manage Integrations" icon={ShareIcon} />
              <DrawerPopupBtn label="Clone Dashboard" icon={ShareIcon} />
              <DrawerPopupBtn label="Save As Template" icon={ShareIcon} />
            </Stack>
            </Popover.Dropdown>
          </Popover>
        </div>
      </Flex>
    </div>
  )
}

export default DrawerSettingsSection