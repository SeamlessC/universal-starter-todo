import { Avatar, createStyles } from "@mantine/core";

function CircularImages(avatar: { img: string; top: string; left: string; size?: any }) {
	const useStyle = createStyles((theme) => ({
		CircularImg: {
			position: "absolute",
			top: avatar.top,
			left: avatar.left,
			zIndex: 5,
			objectFit: "cover",
			boxShadow: "1px 2px 9px #bfbfbf",
		},
	}));
	const { classes, theme } = useStyle();

	return (
		<Avatar
			src={avatar.img}
			radius="xl"
			size={avatar.size != null ? avatar.size : "md"}
			alt="it's me"
			className={classes.CircularImg}
		/>
	);
}

export default CircularImages;
