import { ColorInput, Grid } from "@mantine/core";
import React from "react";

function CustomThemeColor(customeThemeColor: { label: string }) {
	return (
		<Grid>
			<Grid.Col span={6}>{customeThemeColor.label}</Grid.Col>
			<Grid.Col span={6}>
				<ColorInput defaultValue="#ff6200" placeholder="Pick color" />
			</Grid.Col>
		</Grid>
	);
}

export default CustomThemeColor;
