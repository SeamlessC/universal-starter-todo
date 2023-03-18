import { createStyles, Grid, Group, Text } from "@mantine/core";
import React from "react";

const useStyele = createStyles((theme) => ({
	personBox: {
		width: "100%",
		// background: "lightGreen",
		paddingRight: "10px",
	},
	ownerText: {
		color: theme.colors.gray[5],
	},
	CircularBox: {
		borderRadius: "50%",
		width: "40px",
		height: "40px",
		background: theme.colors.orange[8],
		color: theme.white,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	grid: {
		width: "90%",
	},
}));

function PeopleWithAccessUI(data: { person: any }) {
	const { classes, theme } = useStyele();

	return (
		<Group className={classes.personBox} position="apart" mt={10}>
			<Grid className={classes.grid}>
				<Grid.Col span={1}>
					<div className={classes.CircularBox}>
						<Text tt="uppercase">{data.person.name.charAt(0)}</Text>
					</div>
				</Grid.Col>
				<Grid.Col span={11}>
					<Text ml={10} fw={500}>
						{data.person.name}
					</Text>
					<Text ml={10}>{data.person.email}</Text>
				</Grid.Col>
			</Grid>
			<div className={classes.ownerText}>{data.person.owner == true ? "Owner" : null}</div>
		</Group>
	);
}

export default PeopleWithAccessUI;
