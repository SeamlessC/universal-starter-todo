import { Card, Checkbox, createStyles, Grid, Popover, ScrollArea, Text } from "@mantine/core";
import AdReport from "../../assets/ad_report.png";
import ThemeImg from "../../assets/themeImg.png";
import DrawerPresets from "./drawer/DrawerPresets";

const useStyles = createStyles((theme) => ({
	gridBottomBorder: {
		marginTop: "10px",
		borderBottom: `1px solid ${theme.colors.red[2]}`,
	},
	widgetGrid: {
		margin: "0 6%",
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			margin: 0,
			padding: 0,
		},
	},
	widgetCard: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: "row",
			padding: "5px 8px",
		},
		height: "100%",
	},
	themeCard: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: "row",
		},
		height: "100%",
	},
}));

function DashboardAccordionData(accordionData: { type: string; data1: Array<{ name: string }> }) {
	const { classes, theme } = useStyles();

	return (
		<div>
			{accordionData.type == "preset" ? (
				accordionData.data1.map((e, i) => {
					return (
						<Grid key={i} className={classes.gridBottomBorder}>
							<Grid.Col span={11}>
								<Text style={{ color: theme.colors.gray[7] }}>{e.name}</Text>
							</Grid.Col>
							<Grid.Col span={1}>
								<Checkbox key={i} radius="xs" color="orange" />
							</Grid.Col>
						</Grid>
					);
				})
			) : accordionData.type == "widget" ? (
				<Grid className={classes.widgetGrid} gutter="lg">
					{accordionData.data1.map((e, i) => {
						return (
							<Grid.Col span={6} key={i}>
								{/* <Card shadow="sm" p="lg" radius="md" withBorder className={classes.widgetCard}>
                                            <img src={AdReport} width={30} />
                                            <Text style={{color: theme.colors.gray[7]}}>{e.name}</Text>
                                        </Card> */}

								<Popover width={430} position="bottom" withArrow shadow="md">
									<Popover.Target>
										<Card shadow="sm" p="lg" radius="md" withBorder className={classes.widgetCard}>
											<img src={AdReport} width={30} />
											<Text style={{ color: theme.colors.gray[7] }}>{e.name}</Text>
										</Card>
									</Popover.Target>
									<Popover.Dropdown>
										<ScrollArea style={{ height: "400px" }}>
											<DrawerPresets showBody="default" popUpLabel={e.name} />
										</ScrollArea>
									</Popover.Dropdown>
								</Popover>
							</Grid.Col>
						);
					})}
				</Grid>
			) : accordionData.type == "presentTheme" ? (
				<Grid className={classes.widgetGrid} gutter="lg">
					{accordionData.data1.map((e, i) => {
						return (
							<Grid.Col span={6} key={i}>
								<Card shadow="sm" p="lg" radius="md" withBorder className={classes.themeCard}>
									<img src={ThemeImg} />
								</Card>
							</Grid.Col>
						);
					})}
				</Grid>
			) : accordionData.type == "customeTheme" ? (
				<div>Custome theme</div>
			) : null}
		</div>
	);
}

export default DashboardAccordionData;
