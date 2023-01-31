import { useState, useRef } from 'react';
import { Autocomplete, Loader, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  input: {
      padding: "10px 0",
      width: "70%",
  }
}));

export function AutocompleteLoading({label, placeholder}) {
  const timeoutRef = useRef(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { classes, theme } = useStyles();

    const handleChange = (val) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    // if (val.trim().length === 0 || val.includes('@')) {
    //   setLoading(false);
    // } else {
    //   setLoading(true);
    //   timeoutRef.current = window.setTimeout(() => {
    //     setLoading(false);
    //     setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
    //   }, 1000);
    // }
    console.log(val)
  };

  return (
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size={16} /> : null}
      label={label}
      placeholder={placeholder}
      className={classes.input}
      required
    />
  );
}