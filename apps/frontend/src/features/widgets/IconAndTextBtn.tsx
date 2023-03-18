import { createStyles, Group, Text, UnstyledButton } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	outline: {
		borderRadius: theme.radius.md,
		border: `1px solid ${theme.colors.orange[8]}`,
		color: theme.colors.orange[8],
		padding: "5px 10px",
		marginTop: "30px",
	},
	default: {},
}));

function IconAndTextBtn(data: { icon: string; label: string; marginTop?: number; outline?: boolean }) {
	const { classes, theme } = useStyles();

	return (
		<UnstyledButton className={data.outline == true ? classes.outline : classes.default}>
			<Group mt={data.marginTop != null ? data.marginTop : 15}>
				<img src={data.icon} width={20} />
				<Text>{data.label}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default IconAndTextBtn;
