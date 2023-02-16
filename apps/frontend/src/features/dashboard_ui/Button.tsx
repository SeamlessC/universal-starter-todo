import { Button, createStyles, Flex } from '@mantine/core'
import React from 'react'

const useStyle = createStyles((theme) => ({
   
}))

function CusButton(btn: {label: string}) {
  const { classes, theme } = useStyle()

  return (
    <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{paddingTop: "4%"}}
    >
        <Button>
            {btn.label}
        </Button>
    </Flex>
  )
}

export default CusButton