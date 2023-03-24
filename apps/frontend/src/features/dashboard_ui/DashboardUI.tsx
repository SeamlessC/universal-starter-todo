import { createStyles } from "@mantine/core";
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
		// <Card shadow="sm" p="lg" radius="md" withBorder className={classes.cardBg}>
		//     <DashBoardUIHeader />
		//     <DashBoardUIBody />
		//     <DashboardUIDrawer />
		// </Card>
		<div className={classes.cardBg}>
			<DashBoardUIHeader />
			<DashBoardUIBody />
			<DashboardUIDrawer />
		</div>
	);
}

export default DashboardUI;
