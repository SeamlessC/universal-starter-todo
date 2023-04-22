import React from "react";
import { TextInput, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  input: {
      padding: "10px 0",
      width: "70%",
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        width: "100%",
      },
  }
}));

export function AutocompleteLoading({label, placeholder, form, validationName}) {
  const { classes, theme } = useStyles();

  return (
    <TextInput 
      className={classes.input}
      label={label}
      placeholder={placeholder}
      {...form.getInputProps(validationName)}
    />
  );
}