import { Card } from '@mantine/core'

function DashboardUIGraph(info: {info: number}) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
       {info.info}
    </Card>
  )
}

export default DashboardUIGraph