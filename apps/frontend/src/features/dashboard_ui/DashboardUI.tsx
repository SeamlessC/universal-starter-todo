import { createStyles } from "@mantine/core";
import AreaChart from "../widgets/charts/AreaChart";
import BarChart from "../widgets/charts/BarChart";
import { chartLabels, multiLineChartData, singleLineChartData } from "../widgets/charts/data";
import LineChartUI from "../widgets/charts/LineChart";
import PieChart from "../widgets/charts/PieChart";
import VerticleBarChart from "../widgets/charts/VerticleBarChart";
import DashBoardUIBody from "./DashBoardUIBody";
import DashBoardUIHeader from "./DashBoardUIHeader";
import DashboardUIDrawer from "./drawer/DashboardUIDrawer";

const useStyles = createStyles((theme) => ({
	cardBg: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3],
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		// minHeight: "100vh",
		margin: "5% 0",
	},
}));

function DashboardUI() {
	const { classes, theme } = useStyles();

	return (
		<div className={classes.cardBg}>
			<DashBoardUIHeader />
			<DashBoardUIBody />
			<DashboardUIDrawer />

			<AreaChart labels={chartLabels} />
			<PieChart />
			<LineChartUI data={singleLineChartData} />
			<LineChartUI data={multiLineChartData} />
			<VerticleBarChart label={chartLabels} />
			<BarChart />
		</div>
	);
}

export default DashboardUI;
