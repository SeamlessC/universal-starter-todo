import { Flex, Text } from "@mantine/core";
import Icon from "../../../../assets/blank.png";

function FixDashboardErrors() {
	return (
		<Flex
			mih={50}
			gap="md"
			justify="flex-start"
			align="flex-start"
			direction="row"
			wrap="wrap"
			style={{ paddingTop: "4%" }}
		>
			<img src={Icon} width={30} />
			<Text>Fix Dashboard Errors</Text>
		</Flex>
	);
}

export default FixDashboardErrors;
