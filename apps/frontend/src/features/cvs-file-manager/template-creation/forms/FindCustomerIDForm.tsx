import { Group, NumberInput, Select } from '@mantine/core'
import React from 'react'
import Btn from '../../../profile-ui/Btn'
import CustomeLink from '../../../profile-ui/Links'

function FindCustomerIDForm() {
  return (
    <>
      <Select
        label="Type"
        defaultValue="header"
        data={[
          { value: 'header', label: 'Header' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
      <div style={{display: "flex", flexDirection: "row"}}>
        <NumberInput
          mt={5}
          defaultValue={0}
          label="Column"
          min={0}
          width="50%"
        />
        <NumberInput
          mt={5}
          ml={5}
          defaultValue={0}
          label="Line"
          min={0}
          width="50%"
        />
      </div>
      <Group position='apart' mt={10} mb={20}>
        <CustomeLink label='Cancel' />
        <Btn label="Apply" varient="outline" />
      </Group>
    </>
  )
}

export default FindCustomerIDForm