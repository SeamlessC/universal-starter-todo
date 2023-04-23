import { Switch } from '@mantine/core';

export function SwitchButton(switchBtn: {label: String}) {
  return (
    <Switch
      mt={20}
      label={switchBtn.label}
      size="md"
    //   color="orange"
    />
  );
}