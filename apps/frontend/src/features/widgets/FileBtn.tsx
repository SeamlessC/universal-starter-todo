import { useState } from 'react';
import { FileButton, Button, Group, Text, List } from '@mantine/core';
import React from 'react';

export function FileBtn(file: {label: string, setFiles: any}) {
//   const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group position="center">
        <FileButton onChange={file.setFiles} multiple>
          {(props) => <Button {...props}>{file.label}</Button>}
        </FileButton>
      </Group>
    </>
  );
}