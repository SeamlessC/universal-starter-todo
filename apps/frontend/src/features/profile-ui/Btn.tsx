import { Button, createStyles } from "@mantine/core";
import React from "react";

const useStyle = createStyles((theme) => ({
	btnWidthSmall: {
		[`@media (max-width: ${theme.breakpoints.lg}px)`]: {
			width: "40%",
		},
	},
}));

function Btn(btn: {
	label: string;
	bgColor?: string;
	textColor?: string;
	varient?: any;
	disabled?: boolean;
	btnWidth?: string;
	marginTop?: string;
	margin?: string;
	type?: any;
	icon?: string;
	onClick?: any;
}) {
	const { classes, theme } = useStyle();

	return (
		<Button
			variant={btn.varient != null ? btn.varient : "filled"}
			disabled={!!btn.disabled}
			className={classes.btnWidthSmall}
			style={{ width: btn.btnWidth, marginTop: btn.marginTop, margin: btn.margin }}
			type={btn.type != null ? btn.type : "button"}
			onClick={btn.onClick}
		>
			{btn.icon ? <img src={btn.icon} style={{ marginRight: "5px" }} /> : null}
			{btn.label}
		</Button>
	);
}

export default Btn;
