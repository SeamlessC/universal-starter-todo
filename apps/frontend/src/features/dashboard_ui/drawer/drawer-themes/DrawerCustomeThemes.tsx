import { Accordion, Box, createStyles, Grid, Text, TextInput } from '@mantine/core'
import React from 'react'
import CustomThemeColor from './CustomThemeColor'
import ThemeAdditionalColors from './ThemeAdditionalColors'

const useStyles = createStyles((theme) => ({
  marginLeft: {
    marginLeft: "10%",
    marginTop: "3%",
  }
}))

function DrawerCustomeThemes() {
  const { classes, theme } = useStyles()

  return (
    <Accordion variant="separated" radius="xs" style={{marginTop: '10px'}}>
  	    <Accordion.Item 
          value="fe" 
          style={{border: 0}} 
        >
            <Accordion.Control>Custom Themes</Accordion.Control>
            <Accordion.Panel>
              <div>
                <TextInput label="Theme Name" />
                <Box
                  sx={(theme) => ({
                    padding: theme.spacing.sm,
                    backgroundColor: theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    marginTop: "10px"
                  })}
                >
                  <CustomThemeColor label='Background Color' />
                  <CustomThemeColor label='Header Color' />
                </Box>
                <Box
                  sx={(theme) => ({
                    padding: theme.spacing.sm,
                    backgroundColor: theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    marginTop: "10px"
                  })}
                >
                  <Text>Data Colors</Text>
                  <div className={classes.marginLeft}>
                    <CustomThemeColor label='Primary Color' />
                    <ThemeAdditionalColors label='Header Color' />
                  </div>
                </Box>
                <Box
                  sx={(theme) => ({
                    padding: theme.spacing.sm,
                    backgroundColor: theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    marginTop: "10px"
                  })}
                >
                  <Text>Fluctuations & Gauge Colors</Text>
                  <div className={classes.marginLeft}>
                    <CustomThemeColor label='Good' />
                    <CustomThemeColor label='Medium' />
                    <CustomThemeColor label='Bad' />
                  </div>
                </Box>
              </div>
            </Accordion.Panel>
        </Accordion.Item>
    </Accordion>
  )
}

export default DrawerCustomeThemes