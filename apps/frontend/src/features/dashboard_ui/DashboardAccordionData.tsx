import { Card, Center, Checkbox, createStyles, Grid, Text } from '@mantine/core';
import AdReport from '../../assets/ad_report.png';

const useStyles = createStyles((theme) => ({
    gridBottomBorder: {
      marginTop: "10px",
      borderBottom: `1px solid ${theme.colors.red[2]}`,
    },
    widgetGrid: {
        margin: "0 6%",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            margin: 0,
            padding: 0,
        },
    },
    widgetCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "row",
            padding: "5px 8px"
        },
        height: "100%",
    }
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
                    <Grid className={classes.widgetGrid} gutter="lg">
                        {
                            accordionData.data1.map((e, i) => {
                                return (
                                    <Grid.Col span={6} key={i} >
                                        <Card shadow="sm" p="lg" radius="md" withBorder className={classes.widgetCard}>
                                            <img src={AdReport} width={30} />
                                            <Text style={{color: theme.colors.gray[7]}}>{e.name}</Text>
                                        </Card>
                                    </Grid.Col>
                                );
                            })
                        }
                    </Grid>
            : 
                <div>d</div>
            )
        }
    </div>
  );
}

export default DashboardAccordionData