import { Indicator, Group, Text } from '@mantine/core';

export function IndicatorWithText(data: {color: string, label: string}) {
  return (
    // <Group position='left' mt={20} mb={20}>
    <Group position='left'>
      <Indicator color={data.color} size={15}>
      </Indicator>
      <Text ml={10}>{data.label}</Text>
    </Group>
  );
}