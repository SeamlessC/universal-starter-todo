import { Checkbox, Group, Textarea } from "@mantine/core";
import { useState } from "react";
import IconAndTextBtn from "../widgets/IconAndTextBtn";
import { CollaborationMultipleSelect } from "./CollaborationMultipleSelect";

import LinkIcon from "../../assets/link-icon.png";
import CustomeLink from "../profile-ui/Links";
import Btn from "../profile-ui/Btn";

function CollaborationSendMsg(data: { data: any; setData: any; value: any; setValue: any }) {
	const [checked, setChecked] = useState(true);

	return (
		<div>
			<CollaborationMultipleSelect
				data={data.data}
				setData={data.setData}
				value={data.value}
				setValue={data.setValue}
				width="100%"
			/>
			<Checkbox
				mt={30}
				label="Notify People"
				checked={checked}
				onChange={(event) => setChecked(event.currentTarget.checked)}
			/>
			<Textarea mt={30} placeholder="Type the message here... (optional)" autosize minRows={5} />
			<Group position="apart">
				<IconAndTextBtn label="Generate & Copy Link" icon={LinkIcon} marginTop={0} outline={true} />
				<Group mt={30} position="apart" style={{ width: "30%" }}>
					<CustomeLink label="Cancel" />
					<Btn label="Send" btnWidth="100px" />
				</Group>
			</Group>
		</div>
	);
}

export default CollaborationSendMsg;
