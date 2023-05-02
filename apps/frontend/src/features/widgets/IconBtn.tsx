import { ActionIcon, createStyles } from '@mantine/core'

const useStyle = createStyles((theme) => ({
    iconBtn: {
        background: theme.colors.orange[7],
        borderRadius: "50%"
    }
}))

function IconBtn(data: {icon: string}) {
  const { classes, theme } = useStyle()

  return (
    <ActionIcon className={classes.iconBtn} variant="filled" mr={3}>
        <img src={data.icon} width={20} />
    </ActionIcon>
  )
}

export default IconBtn