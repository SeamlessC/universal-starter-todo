import { useState } from "react";
import { Stepper, createStyles, Grid, Center, Title, NumberInput, Stack, Select, Text } from "@mantine/core";
import Btn from "../../profile-ui/Btn";
import { useForm } from "@mantine/form";
import { CVSTemplateCreation01 } from "./CVSTemplateCreation01";
import CVSTemplateCreation02 from "./CVSTemplateCreation02";
import CSVForm_01 from "./forms/CSVForm_01";
import DataDefinition from "./DataDefinition";

const useStyles = createStyles((theme) => ({
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		padding: "20px 30px",
		borderRadius: theme.radius.md,
	},
	label: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[2],
	},
	grid: {
		background: "white",
		borderRadius: theme.radius.md,
		padding: "3% 2%",
		// [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
		// 	width: "100%"
		// }, 
	},
	grid2: {
		display: "flex",
		flexDirection: "column",
	},
	input: {
		width: "100%",
	},
	height: {
		height: (window.innerHeight/6)*3.8,
	}
}));

export function CVSTemplateCreation() {
	const [active, setActive] = useState(0);
	const { classes, theme } = useStyles();
	const [files, setFiles] = useState()
	const [formType, setFormType] = useState("structure")

	const form = useForm({
		initialValues: {
		  headerLines: '',
		  footerLines: '',
		  seperator: "",
		  fileEncoding: "",
		},
	});

	const onSubmit = (values: any) => {
		console.log(values);
		console.log(values['headerLines']);
		setFormType("dataDefinition")
	}

	return (
		<>
			<Stepper active={active} breakpoint="sm" onStepClick={setActive} className={classes.main}>
				<Stepper.Step label={window.innerWidth <= 500 ? null : "Select Template"} className={classes.label}></Stepper.Step>
				<Stepper.Step label={window.innerWidth <= 800 ? null : "Choose Dashboard Preferences"} className={classes.label}></Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>
			<Grid mt={20} ml={0} mr={0} columns={48}>
				<Grid.Col sm={48} md={35} className={classes.grid}>
					{
						files == null ?
							<CVSTemplateCreation01 setfiles={setFiles} />
						: <CVSTemplateCreation02 files={files} />	
					}
				</Grid.Col>

				{/* Structure Definition */}
				<Grid.Col sm={48} md={12} offset={1} className={classes.grid}>
					<Center className={classes.grid2}>
						<Title order={3}>
							{formType == "structure" ? "Structure Definition" : "Data Definition"}
						</Title>
						<form onSubmit={form.onSubmit((values) => onSubmit(values))}>
							<Stack justify="space-between" className={classes.height}>
								{
									formType == "structure" ?
										<CSVForm_01 form={form} />
									: <DataDefinition /> 						
								}
								
								<Btn 
									label={formType == "structure" ? "Continue" : "Save Template"}
									type="submit"
								/>
							</Stack>
						</form>
					</Center>
				</Grid.Col>
			</Grid>
		</>
	);
}
