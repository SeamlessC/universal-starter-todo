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
    type?: any,
    onClick?: any,
  }) {

  const { classes, theme } = useStyle()

  return (
    <Button 
      type={btn.type}
      variant={btn.varient != null ? btn.varient : "filled"} 
      disabled={btn.disabled ? true : false}
      className={classes.btnWidthSmall}
      style= {{width: btn.btnWidth, marginTop: btn.marginTop, margin: btn.margin}}
      onClick={btn.onClick}
    >
        {btn.label}
    </Button>
  )
}

export default Btn