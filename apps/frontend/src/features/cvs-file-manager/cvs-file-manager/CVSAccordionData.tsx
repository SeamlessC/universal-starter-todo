import { createStyles, Divider, Text } from '@mantine/core'
import React from 'react'

const useStyele = createStyles((theme) => ({
  margin: {
    margin: "0 10%",
  },

}))

function CVSAccordionData(data: {name:string}) {
  const { classes, theme } = useStyele()

  return (
    <div className={classes.margin}>
      <Text color={theme.colors.gray[6]}>{data.name}</Text>
      <Divider my="sm" color={theme.colors.gray[2]}/>
    </div>
  )
}

export default CVSAccordionData