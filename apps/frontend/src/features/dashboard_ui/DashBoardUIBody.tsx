import { Card, createStyles, Grid } from "@mantine/core";
import DashboardUIGraph from "./DashboardUIGraph";

const useStyles = createStyles((theme) => ({
	typeCard: {
		marginTop: "5%",
	},
}));

const dataInfo = [{ name: "Facebook" }, { name: "LinkedIn" }];

const types = (classes: { typeCard: string }) => {
	return dataInfo.map((e, i) => {
		return (
			<Card className={classes.typeCard} shadow="sm" p="lg" radius="md" withBorder key={i}>
				<h2>{e.name}</h2>
				<Grid gutter="sm">
					<Grid.Col span={8}>
						<Grid gutter="sm">
							<Grid.Col span={4}>
								<DashboardUIGraph info={'line-chart'} />
							</Grid.Col>
							<Grid.Col span={4}>
								<DashboardUIGraph info={'area-chart'} />
							</Grid.Col>
							<Grid.Col span={4}>
								<DashboardUIGraph info={'line-chart'} />
							</Grid.Col>
						</Grid>
					</Grid.Col>
					<Grid.Col span={4}>
						<DashboardUIGraph info={'line-chart'} />
					</Grid.Col>
					<Grid.Col span={8}>
						<DashboardUIGraph info={'area-chart'} />
					</Grid.Col>
					<Grid.Col span={4}>
						<DashboardUIGraph info={'line-chart'} />
					</Grid.Col>
				</Grid>
			</Card>
		);
	});
};

function DashBoardUIBody() {
	const { classes, theme } = useStyles();

	return <div style={{ width: "97%" }}>{types(classes)}</div>;
}

export default DashBoardUIBody;
