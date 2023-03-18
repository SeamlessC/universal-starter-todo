import { createStyles, Group, Text, UnstyledButton } from "@mantine/core";

const useStyle = createStyles((theme) => ({
	shareBtn: {
		padding: "5px 10px",
		background: theme.colors.orange[7],
		borderRadius: "5px",
		color: theme.white,
	},
}));

function IconBtn(btn: { icon: any; label: string }) {
	const { classes, theme } = useStyle();

	return (
		<UnstyledButton className={classes.shareBtn}>
			<Group position="center">
				<img src={btn.icon} width={15} />
				<Text>{btn.label}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default IconBtn;
