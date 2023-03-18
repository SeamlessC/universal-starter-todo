import { Group, NumberInput, TextInput } from "@mantine/core";

import Btn from "../../../profile-ui/Btn";
import CustomeLink from "../../../profile-ui/Links";

function AddDimensionForm() {
	return (
		<>
			<TextInput label="Name" />
			<NumberInput mt={5} defaultValue={0} label="Column" min={0} />
			<Group position="apart" mt={10} mb={20}>
				<CustomeLink label="Cancel" />
				<Btn label="Apply" varient="outline" />
			</Group>
		</>
	);
}

export default AddDimensionForm;
