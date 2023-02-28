import { createStyles, Group, Stack, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Btn from '../../profile-ui/Btn';
import PlusIcon from '../../../assets/plus-icon.png'
import CustomeLink from '../../profile-ui/Links';

const useStyles = createStyles((theme) => ({
  imgDropContent: {
    flexDirection: "column",
    height: (window.innerHeight/6)*3.8,
  },
  dropBox: {
    border: "none",
  }
}));

// export function CVSTemplateCreation01(props: Partial<DropzoneProps>) {
export function CVSTemplateCreation01(props: {setfiles: any}) {
  const { classes, theme } = useStyles()
  
  return (
    <div>
      <Dropzone
        onDrop={(files) => props.setfiles(files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
        className={classes.dropBox}
      >
        <Group position="center" spacing="xl" className={classes.imgDropContent}>
          <Text size="md" inline>
            Drag and drop file here
          </Text>
          <Text size="md" inline>
            or
          </Text>
          <Btn 
            label="Add File" 
            btnWidth='20%'
            varient="outline" 
            icon={PlusIcon}
          />
        </Group>
      </Dropzone>
      <Group position="center">
        <Text>Wants to know which file types are supported? </Text>
        <CustomeLink 
          label="Learn More"
          noMarginTop={true}
        />
      </Group>
    </div>
  );
}