import { Accordion, ScrollArea } from '@mantine/core'

import AddDimensionForm from './forms/AddDimensionForm'
import AddMetricForm from './forms/AddMetricForm'
import DefineDateForm from './forms/DefineDateForm'
import FindCustomerIDForm from './forms/FindCustomerIDForm'

function DataDefinition() {
  return (
    <div style={{width: "100%"}}>
      <ScrollArea>
        <Accordion>
          <Accordion.Item value="Define Date">
            <Accordion.Control>Define Date</Accordion.Control>
            <Accordion.Panel>
              <DefineDateForm />
            </Accordion.Panel>
          </Accordion.Item>
    
          <Accordion.Item value="Find Customer ID">
            <Accordion.Control>Find Customer ID</Accordion.Control>
            <Accordion.Panel>
              <FindCustomerIDForm />
            </Accordion.Panel>
          </Accordion.Item>
    
          <Accordion.Item value="Add Dimensions">
            <Accordion.Control>Add Dimensions</Accordion.Control>
            <Accordion.Panel>
              <AddDimensionForm />
            </Accordion.Panel>
          </Accordion.Item>
  
          <Accordion.Item value="Add Metric">
            <Accordion.Control>Add Metric</Accordion.Control>
            <Accordion.Panel>
              <AddMetricForm />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </ScrollArea>
    </div>
  )
}

export default DataDefinition