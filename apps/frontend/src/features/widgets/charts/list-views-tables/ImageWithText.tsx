import { Button, createStyles, Group,Image, Text } from "@mantine/core";

const useStyle = createStyles((theme) => ({
    listContainer: {
        width: "100%",
        margin: "10px 0",
        padding: "10px"
    },
}));

function ImageWithText(data: { listData: { img: string; text: string; } }) {
	const { classes, theme } = useStyle();

	return (
		<Group className={classes.listContainer}>
            <Image  src={data.listData.img} alt="Random image" width={100} />
            <Text align="justify" size="sm">
                {data.listData.text}
            </Text>
        </Group>
	);
}

export default ImageWithText;
