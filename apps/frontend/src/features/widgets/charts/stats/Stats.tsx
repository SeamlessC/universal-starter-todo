import { Paper, createStyles, Text, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    paper: {
        width: "30%",
    },
    title: {
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    value: {
        fontSize: 40,
        fontWeight: 500,
        lineHeight: 1,
        textAlign: "center",
    },
    subValue: {
        fontWeight: 700,
    },
}));

function StatCard(data: {
    title: String, 
    value: number,
    previousYearData: number, 
    previousPeriodData: number,
    previousPerionPosiive: boolean,
    previousYearPositive: boolean,
}) {

	const { classes, theme } = useStyles();

	return (
		<Paper withBorder p="md" radius="md" shadow="xs" className={classes.paper}>
            <Text size="xs" color="dimmed" className={classes.title}>
                {data.title}
            </Text>
            <Text className={classes.value} mt={10}>{data.value}</Text>
            <Group position="apart" mt={10}>
                <div>
                    <Text color="dimmed">Pervious Period</Text>
                    <Text 
                        align="center" 
                        color={data.previousPerionPosiive ? "green" : "red"}
                        className={classes.subValue}
                    >
                        {data.previousPerionPosiive ? "+" : "-"}{data.previousPeriodData} %
                    </Text>
                </div>
                <div>
                    <Text color="dimmed">Pervious Year</Text>
                    <Text 
                        align="center" 
                        color={data.previousYearPositive ? "green" : "red"}
                        className={classes.subValue}
                    >
                        {data.previousYearPositive ? "+" : "-"}{data.previousYearData} %
                    </Text>
                </div>
            </Group>
        </Paper>
	);
}

export default StatCard;
