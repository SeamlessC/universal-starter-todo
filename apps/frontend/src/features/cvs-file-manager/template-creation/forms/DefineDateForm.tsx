import { Group, NumberInput, Select } from '@mantine/core'
import React from 'react'
import Btn from '../../../profile-ui/Btn'
import CustomeLink from '../../../profile-ui/Links'

function DefineDateForm() {
  return (
    <div>
      <Select
        label="Type"
        defaultValue="react"
        data={[
          { value: 'react', label: 'React' },
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
      <Select
        mt={5}
        label="Format"
        defaultValue="MM DD YYYY"
        data={[
          { value: 'MM DD YYYY', label: 'MM DD YYYY' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
      <Select
        mt={5}
        label="Range seperator"
        defaultValue="none"
        data={[
          { value: 'none', label: 'None' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
      <Group position='apart' mt={10} mb={20}>
        <CustomeLink label='Cancel' />
        <Btn label="Apply" varient="outline" />
      </Group>
    </div>
  )
}

export default DefineDateForm