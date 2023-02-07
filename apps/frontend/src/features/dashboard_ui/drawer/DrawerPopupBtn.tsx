import { Text, Group, UnstyledButton, createStyles } from '@mantine/core'
import React from 'react'
import ShareIcon from '../../../assets/share-icon.png'

const useStyle = createStyles((theme) => ({
    popupText: {
        '&:hover': {
          fontWeight: 600,
        }
    },
}))

function DrawerPopupBtn( info: {label: string, icon: string} ) {
  const { classes, theme } = useStyle()

  return (
    <UnstyledButton>
        <Group>
            <img src={info.icon} width={20} />
            <Text className={classes.popupText}>{info.label}</Text>
        </Group>
    </UnstyledButton>
  )
}

export default DrawerPopupBtn