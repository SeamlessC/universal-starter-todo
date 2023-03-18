import { createStyles, NumberInput, Select } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
	input: {
		width: "100%",
	},
}));

function CSVForm_01(form: { form: any }) {
	const { classes, theme } = useStyles();

	return (
		<div>
			<NumberInput
				mt={10}
				defaultValue={0}
				label="Header Lines"
				min={0}
				className={classes.input}
				{...form.form.getInputProps("headerLines")}
			/>
			<NumberInput
				mt={10}
				defaultValue={0}
				label="Footer Lines"
				min={0}
				className={classes.input}
				{...form.form.getInputProps("footerLines")}
			/>
			<Select
				mt={10}
				allowDeselect
				label="Column Seperator"
				defaultValue="react"
				data={[
					{ value: "react", label: "React" },
					{ value: "ng", label: "Angular" },
					{ value: "svelte", label: "Svelte" },
					{ value: "vue", label: "Vue" },
				]}
				{...form.form.getInputProps("seperator")}
			/>
			<Select
				mt={10}
				allowDeselect
				label="File Encoding"
				defaultValue="utf-8"
				data={[
					{ value: "utf-8", label: "UTF-8" },
					{ value: "ng", label: "Angular" },
					{ value: "svelte", label: "Svelte" },
					{ value: "vue", label: "Vue" },
				]}
				{...form.form.getInputProps("fileEncoding")}
			/>
		</div>
	);
}

export default CSVForm_01;
