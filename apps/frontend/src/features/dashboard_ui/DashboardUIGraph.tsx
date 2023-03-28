import { Card } from "@mantine/core";
import AreaChart from "../widgets/charts/AreaChart";
import BarChart from "../widgets/charts/BarChart";
import LineChartUI from "../widgets/charts/LineChart";
import PieChart from "../widgets/charts/PieChart";
import VerticleBarChart from "../widgets/charts/VerticleBarChart";

function DashboardUIGraph(info: { type: String, labels: string[]}) {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			{/* {info.info} */}
			{
				info.type == 'line-chart'
					? <LineChartUI />
					: info.type == 'area-chart'
						? <AreaChart />
						: info.type == 'bar-chart'
							? <BarChart />
							: info.type == 'pie-chart'
								? <PieChart />
								: info.type == 'verticle-bar-chart'
									? <VerticleBarChart label={info.labels} />
									: null
			}
		</Card>
	);
}

export default DashboardUIGraph;
