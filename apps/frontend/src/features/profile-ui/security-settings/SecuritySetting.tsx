import { Center, createStyles, Group, Input, ScrollArea, Switch, Text } from '@mantine/core'
import React, { useState } from 'react'
import Btn from '../Btn'
import SecuritySettingsTable from './SecuritySettingsTable'

const useStyle = createStyles((theme) => ({
  switchBox: {
    padding: "0 10% 8%",
  },
  marginTop: {
    marginTop: "8%"
  }
}))

const AccessLogHeads = [
  "Date",
  "Dashboard",
  "IP Address",
  "Username",
  "Edit"
] 

const ipAccessHeads = [
  "Name",
  "Range Start",
  "Range End",
] 

function SecuritySetting() {
  const { classes, theme } = useStyle()
  const [accessLog, setAccessLog] = useState(false)
  const [ipAccess, setIpAccess] = useState(false)

  return (
    <div>
      <Group position="apart" spacing="xl" className={classes.switchBox}>
        <Switch label="Access Log" onChange={(event) => setAccessLog(event.currentTarget.checked)} />
        <Switch label="Manage IP Access" onChange={(event) => setIpAccess(event.currentTarget.checked)} />
      </Group>
      <Text>
        {ipAccess == true ? 
          "Make sure no authorized part will have access to any of your reports." 
        : 
          "Monitor every Access to all dashboard"
        }
      </Text>
      {
        ipAccess == true ?
        <Input
          placeholder="Enter here..."
          rightSection={
            <div style={{marginRight: "60px"}}>
              <Btn 
                label="Add"
                btnWidth="100px"
              />
            </div>
          }
        />
        : null
      }

      <ScrollArea>
        {
          ipAccess == true ?
            <SecuritySettingsTable heads={ipAccessHeads} />
          : <SecuritySettingsTable heads={AccessLogHeads} isAccessLog={true} />
        }
      </ScrollArea>

      <Center className={classes.marginTop}>
        <Btn 
          label="Update Settings"
          btnWidth="35%"
        />
      </Center>
    </div>
  )
}

export default SecuritySetting