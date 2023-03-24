import { Card } from "@mantine/core";
import AreaChart from "../widgets/charts/AreaChart";
import BarChart from "../widgets/charts/BarChart";
import LineChartUI from "../widgets/charts/LineChart";

function DashboardUIGraph(info: { info: String }) {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			{/* {info.info} */}
			{
				info.info == 'line-chart'
					? <LineChartUI />
					: info.info == 'area-chart'
						? <AreaChart />
						: info.info == 'bar-chart'
							? <BarChart />
							: null
			}
		</Card>
	);
}

export default DashboardUIGraph;
