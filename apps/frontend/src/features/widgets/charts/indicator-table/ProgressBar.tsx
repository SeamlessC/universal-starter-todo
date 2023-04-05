import { Group, Progress, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  label: {
    width: "10%",
    textAlign: "right",
  },
  progressBar: {
    width: "87%",
    background: "transparent",
  }
}));

export function ProgressBar(data: {value: number, color: string, label: string, highestValue: number}) {
  const { classes, theme } = useStyles();

  return (
    <Group>
      <Text className={classes.label}>{data.label}</Text>
      <Progress 
        value={data.value / data.highestValue * 100} 
        size={14}
        color={data.color} 
        label={data.value.toString()}
        className={classes.progressBar}
      />
    </Group>
  );
}