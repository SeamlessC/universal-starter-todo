import { Text, Group, UnstyledButton, createStyles } from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
	popupText: {
		"&:hover": {
			fontWeight: 600,
		},
	},
}));

function DrawerPopupBtn(info: { label: string; icon: string; setShowBody: any }) {
	const { classes, theme } = useStyle();

	return (
		<UnstyledButton onClick={() => info.setShowBody(info.label)}>
			<Group>
				<img src={info.icon} width={20} />
				<Text className={classes.popupText}>{info.label}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default DrawerPopupBtn;
