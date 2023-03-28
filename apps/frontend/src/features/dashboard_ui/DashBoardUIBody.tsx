import { Card, createStyles, Grid } from "@mantine/core";
import { chartLabels } from "../widgets/charts/data";
import DashboardUIGraph from "./DashboardUIGraph";
import { faker } from '@faker-js/faker'

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
								<DashboardUIGraph 
									type={'line-chart'} 
									labels={chartLabels} 
								/>
							</Grid.Col>
							<Grid.Col span={4}>
								<DashboardUIGraph 
									type={'bar-chart'} 
									labels={chartLabels} 
								/>
							</Grid.Col>
							<Grid.Col span={4}>
								<DashboardUIGraph type={'pie-chart'} labels={chartLabels} />
							</Grid.Col>
						</Grid>
					</Grid.Col>
					<Grid.Col span={4}>
						<DashboardUIGraph type={'verticle-bar-chart'} labels={chartLabels} />
					</Grid.Col>
					<Grid.Col span={8}>
						<DashboardUIGraph type={'area-chart'} labels={chartLabels}  />
					</Grid.Col>
					<Grid.Col span={4}>
						<DashboardUIGraph type={'line-chart'} labels={chartLabels}  />
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
