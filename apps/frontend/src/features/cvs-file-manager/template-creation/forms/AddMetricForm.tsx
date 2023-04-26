import { Group, TextInput } from '@mantine/core'
import Btn from '../../../profile-ui/Btn'
import CustomeLink from '../../../profile-ui/Links'

function AddMetricForm() {
  return (
    <>
      <TextInput
        label="ype"
      />
      <TextInput
        label="Column"
      />
      <TextInput
        label="Format"
      />
      <TextInput
        label="Decimals"
      />
      <Group position='apart' mt={10} mb={20}>
        <CustomeLink label='Cancel' />
        <Btn label="Apply" varient="outline" />
      </Group>
    </>
  )
}

export default AddMetricForm