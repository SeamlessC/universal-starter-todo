import { Card, createStyles, Grid, } from '@mantine/core';
import { info } from 'console';
import DashboardUIGraph from './DashboardUIGraph';

const useStyles = createStyles((theme) => ({
    typeCard: {
        margin: "5%",
    },
    
}));

const dataInfo = [
    {name: "Facebook",},
    {name: "LinkedIn",},
];

const types = (classes: { typeCard: string; }) => {
    return dataInfo.map((e,i) => {
        return (
            <Card className={classes.typeCard} shadow="sm" p="lg" radius="md" withBorder key={i}>
                <h2>{e.name}</h2>
                <Grid gutter="sm">
                    <Grid.Col span={8}>
                        <Grid gutter="sm">
                            <Grid.Col span={4}><DashboardUIGraph info={1}/></Grid.Col>
                            <Grid.Col span={4}><DashboardUIGraph info={2}/></Grid.Col>
                            <Grid.Col span={4}><DashboardUIGraph info={3}/></Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <DashboardUIGraph info={4}/>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <DashboardUIGraph info={5}/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <DashboardUIGraph info={6}/>
                    </Grid.Col>
                </Grid>
            </Card>
        );
    })
}


function DashBoardUIBody() {
  const { classes, theme } = useStyles();

  return (
    <div>
        { types(classes) }
        
    </div>
  )
}

export default DashBoardUIBody