import { createStyles } from "@mantine/core";
import AreaChart from "../widgets/charts/AreaChart";
import BarChart from "../widgets/charts/BarChart";
import { chartLabels, listViewData, multiLineChartData, progressBarData, singleLineChartData } from "../widgets/charts/data";
import DoughnutChart from "../widgets/charts/Doughnut";
import GaugeGraph from "../widgets/charts/GaugeChart";
import HorizontalBarChart from "../widgets/charts/HorizontalBarChart";
import LineChartUI from "../widgets/charts/LineChart";
import ListView from "../widgets/charts/list-views-tables/ListView";
import PieChart from "../widgets/charts/PieChart";
import VerticleBarChart from "../widgets/charts/VerticleBarChart";
import DashBoardUIBody from "./DashBoardUIBody";
import DashBoardUIHeader from "./DashBoardUIHeader";
import DashboardUIDrawer from "./drawer/DashboardUIDrawer";
import StatCard from "../widgets/charts/stats/Stats";
import { IndicatorWithText } from "../widgets/charts/indicator-table/IndicatorWithText";
import { ProgressBar } from "../widgets/charts/indicator-table/ProgressBar";
import DataTableComponent from "../widgets/charts/DataTableComponent";

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


			<DataTableComponent />

			{
				progressBarData.map((val, i) => {
					return (
						<div key={i} style={{width: "80%"}}>
							<ProgressBar 
								value={val.val} 
								color={val.color} 
								label={val.val.toString()} 
								highestValue={500} 
							/>
						</div>
					);
				})
			}
			<IndicatorWithText color="lime" label="Maneesha"/>
			<IndicatorWithText color="red" label="Lakshani"/>
			<StatCard 
				previousPeriodData={45}
				previousPerionPosiive={true}
				previousYearData={78}
				previousYearPositive={false}
				title={"clicks"}
				value={6668}
			/>
			<StatCard 
				previousPeriodData={80}
				previousPerionPosiive={false}
				previousYearData={12}
				previousYearPositive={true}
				title={"Impressions"}
				value={12896}
			/>
			<ListView listData={listViewData}/>
			<HorizontalBarChart />
			<AreaChart labels={chartLabels} />
			<PieChart />
			<LineChartUI data={singleLineChartData} />
			<LineChartUI data={multiLineChartData} />
			<VerticleBarChart label={chartLabels} />
			<GaugeGraph id="afq" value={20} title="geg" />
			<BarChart />
			<DoughnutChart />
		</div>
	);
}

export default DashboardUI;
