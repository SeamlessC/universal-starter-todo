import { Group, Text, UnstyledButton } from '@mantine/core'

function IconAndTextBtn(data: {icon: string, label: string, marginTop?: number}) {
  return (
    <UnstyledButton>
        <Group mt={data.marginTop != null ? data.marginTop : 15}>
            <img src={data.icon} width={20} />
            <Text>{data.label}</Text>
        </Group>
    </UnstyledButton>
  )
}

export default IconAndTextBtn