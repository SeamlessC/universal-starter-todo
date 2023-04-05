import { Button, createStyles, Group,Image, Text } from "@mantine/core";

const useStyle = createStyles((theme) => ({
    textContainer: {
        width: "70%",
    },
    listContainer: {
        width: "50%",
        margin: "10px 0",
        padding: "10px"
    }
}));

function ListView(data: { listData: { img: string; text: string; }[] }) {
	const { classes, theme } = useStyle();

	return (
		<div>
            {
                data.listData.map((ele, i) => {
                    return (
                        <Group className={classes.listContainer} key={i}>
                            <Image maw={100} mx="auto"  src={ele.img} alt="Random image" />
                            <Text className={classes.textContainer} align="justify" size="sm">
                                {ele.text}
                            </Text>
                        </Group>
                    );
                })
            }
        </div>
	);
}

export default ListView;
