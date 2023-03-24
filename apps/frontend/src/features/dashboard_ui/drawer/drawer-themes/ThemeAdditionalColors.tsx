import { ActionIcon, Box, ColorPicker, ColorSwatch, Grid, Group, Popover } from "@mantine/core";
import React, { useState } from "react";
import AddBtn from "../../../../assets/plus-icon.png";

function ThemeAdditionalColors(additionalThemeColor: { label: string }) {
	const [showColorPicker, setShowColorPicker] = useState(false);
	const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

	const [colors, setColors] = useState(["#25262b"]);

	const swatches = colors.map((color, i) => <ColorSwatch size={20} key={i} color={color} />);

	return (
		<Grid>
			<Grid.Col span={6}>{additionalThemeColor.label}</Grid.Col>
			<Grid.Col span={6}>
				<Box>
					<Grid>
						<Grid.Col span={9}>
							<Group position="left" spacing="xs">
								{swatches}
							</Group>
						</Grid.Col>

						<Grid.Col span={3}>
							<Popover position="bottom" withArrow shadow="md">
								<Popover.Target>
									<ActionIcon onClick={() => setShowColorPicker(!showColorPicker)}>
										<img src={AddBtn} width={20} />
									</ActionIcon>
								</Popover.Target>
								<Popover.Dropdown>
									<ColorPicker
										value={value}
										onChange={onChange}
										onClick={() => (colors.length < 4 ? setColors((prevArray) => [...prevArray, value]) : null)}
									/>
								</Popover.Dropdown>
							</Popover>
						</Grid.Col>
					</Grid>
				</Box>
			</Grid.Col>
		</Grid>
	);
}

export default ThemeAdditionalColors;
