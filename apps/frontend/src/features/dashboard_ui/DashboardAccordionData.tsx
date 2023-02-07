import { Checkbox, createStyles, Grid, Text } from '@mantine/core';
import React from 'react'

const useStyles = createStyles((theme) => ({
    gridBottomBorder: {
      marginTop: "10px",
      borderBottom: `1px solid ${theme.colors.red[2]}`,
    },
})); 

function DashboardAccordionData(accordionData: { type: string, data1: { name: string; }[]}) {
  const { classes, theme } = useStyles();

  return (
    <div>
        {
            accordionData.type == "preset" ? 
                accordionData.data1.map((e, i) => {
                    return (
                        <Grid key={i} className={classes.gridBottomBorder}>
                            <Grid.Col span={11}>
                            <Text style={{color: theme.colors.gray[7]}}>{e.name}</Text>
                            </Grid.Col>
                            <Grid.Col span={1}>
                            <Checkbox
                                key={i}
                                radius="xs"
                                color="orange"
                            />
                            </Grid.Col>
                        </Grid>
                    );
                })
            : ( accordionData.type == 'widget' ? 
                <div>f</div> 
            : 
                <div>d</div>
            )
        }
    </div>
  );
}

export default DashboardAccordionData