import { Group, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  greenLabel: {
    color: "lime",
  },
  redLabel: {
    color: "red",
  },
}));

export function TopCampaignDataIndicator(data: {impressions: number, changeOfImpressions: number}) {
  const { classes, theme } = useStyles();

  return (
    <Group position="apart">
      <Text>{data.impressions}</Text>
      {
        data.changeOfImpressions >= 0
            ? <Text className={classes.greenLabel}>{data.changeOfImpressions}</Text>
            : <Text className={classes.redLabel}>{data.changeOfImpressions}</Text>
      }
    </Group>
  );
}