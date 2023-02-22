import { useState } from "react";
import { Stepper, createStyles, Grid, Center, Title, NumberInput, Stack, Select } from "@mantine/core";
import CVSTemplateCreation01 from "./CVSTemplateCreation01";
import Btn from "../../profile-ui/Btn";
import { useForm } from "@mantine/form";

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
		height: (window.innerHeight/6)*4,
	}
}));

export function CVSTemplateCreation() {
	const [active, setActive] = useState(0);
	const { classes, theme } = useStyles();

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
	}

	return (
		<>
			<Stepper active={active} breakpoint="sm" onStepClick={setActive} className={classes.main}>
				<Stepper.Step label={window.innerWidth <= 500 ? null : "Select Template"} className={classes.label}></Stepper.Step>
				<Stepper.Step label={window.innerWidth <= 800 ? null : "Choose Dashboard Preferences"} className={classes.label}></Stepper.Step>
				<Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
			</Stepper>
			<Grid mt={20} ml={0} mr={0} columns={48}>
				<Grid.Col sm={48} md={32}  className={classes.grid}>
					<CVSTemplateCreation01 />
				</Grid.Col>

				{/* Structure Definition */}
				<Grid.Col sm={48} md={15} offset={1} className={classes.grid}>
					<Center className={classes.grid2}>
						<Title order={3}>Structure Definition</Title>
						<form onSubmit={form.onSubmit((values) => onSubmit(values))}>
							<Stack justify="space-between" className={classes.height}>
								<div>
									<NumberInput
										mt={10}
										defaultValue={0}
										label="Header Lines"
										min={0}
										className={classes.input}
										{...form.getInputProps('headerLines')}
									/>
									<NumberInput
										mt={10}
										defaultValue={0}
										label="Footer Lines"
										min={0}
										className={classes.input}
										{...form.getInputProps('footerLines')}
									/>
									<Select
										mt={10}
										allowDeselect
										label="Column Seperator"
										defaultValue="react"
										data={[
											{ value: 'react', label: 'React' },
											{ value: 'ng', label: 'Angular' },
											{ value: 'svelte', label: 'Svelte' },
											{ value: 'vue', label: 'Vue' },
										]}
										{...form.getInputProps('seperator')}
									/>
									<Select
										mt={10}
										allowDeselect
										label="File Encoding"
										defaultValue="utf-8"
										data={[
											{ value: 'utf-8', label: 'UTF-8' },
											{ value: 'ng', label: 'Angular' },
											{ value: 'svelte', label: 'Svelte' },
											{ value: 'vue', label: 'Vue' },
										]}
										{...form.getInputProps('fileEncoding')}
									/>
								</div>
								<Btn 
									label="Continue" 
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
