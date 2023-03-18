import { createStyles, Title, Text } from "@mantine/core";

import CustomeLink from "../profile-ui/Links";
import AuthenticationForm from "./AuthenticationForm";

const useStyles = createStyles((theme) => ({
	mainContainer: {
		background: theme.fn.linearGradient(-30, "#F74A2A", "#00062E"),
		height: window.innerHeight,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	wrapper: {
		width: "40%",
		backgroundSize: "cover",
		background: theme.white,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "5% 4%",
		borderRadius: theme.radius.md,
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			width: "85%",
		},
	},
	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));

export function Login(auth: { type: any; toggle: any }) {
	const { classes, theme } = useStyles();

	// useEffect(() => {
	//   handleGoogleCallback()
	// },[])

	return (
		<div className={classes.mainContainer}>
			<div className={classes.wrapper}>
				<Title order={2} className={classes.title} align="center" mt="md" mb={50}>
					Login to your account
				</Title>
				<AuthenticationForm type={auth.type} />
				<Text align="center" mt="md" onClick={() => auth.toggle()}>
					Don't have an account ? <CustomeLink label="Start your free trial" />
				</Text>
			</div>
		</div>
	);
}
