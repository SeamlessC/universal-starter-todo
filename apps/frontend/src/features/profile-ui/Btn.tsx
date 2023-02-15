import { Button, createStyles } from '@mantine/core'
import React from 'react'

const useStyle = createStyles((theme) => ({
  btnWidthSmall: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "40%",
    },
  }
}))

function Btn(btn: {
    label: string, 
    bgColor?: string, 
    textColor?: string, 
    varient?: any, 
    disabled?: boolean,
    btnWidth?: string,
    marginTop?: string,
    margin?: string,
  }) {

  const { classes, theme } = useStyle()

  return (
    <Button 
      variant={btn.varient != null ? btn.varient : "filled"} 
      disabled={btn.disabled ? true : false}
      className={classes.btnWidthSmall}
      style= {{width: btn.btnWidth, marginTop: btn.marginTop, margin: btn.margin}}
    >
        {btn.label}
    </Button>
  )
}

export default Btn