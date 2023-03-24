import { Card } from "@mantine/core";
import AreaChart from "../widgets/charts/area_chart/AreaChart";
import LineChartUI from "../widgets/charts/line_chart/LineChart";

function DashboardUIGraph(info: { info: String }) {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			{/* {info.info} */}
			{
				info.info == 'line-chart'
					? <LineChartUI />
					: info.info == 'area-chart'
						? <AreaChart />
						: null
			}
		</Card>
	);
}

export default DashboardUIGraph;
