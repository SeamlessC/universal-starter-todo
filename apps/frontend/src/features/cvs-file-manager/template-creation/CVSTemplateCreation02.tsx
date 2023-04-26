import { Card, CloseButton, Divider, Grid, Group, Text } from '@mantine/core'
import React from 'react'
import Btn from '../../profile-ui/Btn'
import PlusIcon from '../../../assets/plus-icon.png'

function CVSTemplateCreation02(data: {files: File[]}) {
  return (
    <Grid columns={48} justify="center">
        <Grid.Col sm={48} lg={17}>
          <Btn 
            label="Add File"
            icon={PlusIcon}
            varient="outline"
            btnWidth='100%'
          />
          <Text>test text</Text>
          <div style={{marginTop: "12%"}}>
            {
              data.files.map((e, index) => {
                return (
                  <div style={{marginTop: "6%"}}>
                    <Group position="apart">
                      <Text>{e.name}</Text>
                      <CloseButton aria-label="Close modal" />
                    </Group>
                    <Divider />
                  </div>
                )
              })
            }
          </div>
        </Grid.Col>
        <Grid.Col sm={48} lg={30} offset={1}>
            
        </Grid.Col>
    </Grid>
  )
}

export default CVSTemplateCreation02