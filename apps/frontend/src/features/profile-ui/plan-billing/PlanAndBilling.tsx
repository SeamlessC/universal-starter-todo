import { Anchor, Card, Center, Checkbox, createStyles, Divider, Grid, Text, Title } from '@mantine/core'
import { ca } from 'date-fns/locale'
import React from 'react'
import Btn from '../Btn'
import CustomeLink from '../Links'
import BillingInfo from './BillingInfo'
import { SwitchButton } from '../SwitchButon'

const useStyle = createStyles((theme) => ({
  planContainer: {
    padding: "auto",
  },
  planBox: {
    width: "80%",
    margin: "auto",
    padding: "200px",
    border: `1px solid ${theme.black}`,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "100%",
      padding: "10px",
    },
  },
  marginTop: {
    marginTop: "5%",
  },
  checkBoxContainer: {
    marginLeft: "5%",
  }
}))

function PlanAndBilling() {
  const { classes, theme } = useStyle()

  return (
    <div>
      <div className={classes.planContainer}>
        <Card withBorder className={classes.planBox}>
          <Grid>
            <Grid.Col span={5}>
              <Title order={1} weight={900} align="center">
                $39
              </Title>
              <Text fz="md" align="center">
                per month upto
              </Text>
              <Title order={3} weight={600} align="center">
                3 Dashboards
              </Title>
            </Grid.Col>
            <Divider orientation="vertical" />
            <Grid.Col span={6} className={classes.checkBoxContainer}>
              <Title order={3} weight={600} align="center">
                Individual Plan
              </Title>
              <div>
                <Checkbox label="I agree to sell my privacy" checked readOnly className={classes.marginTop} />
                <Checkbox label="I agree to sell my privacy" checked readOnly className={classes.marginTop} />
              </div>
            </Grid.Col>
          </Grid>
        </Card>
        <Center style={{marginTop: "5%"}}>
          <Btn
            label="Change Plan"
            btnWidth="50%"
          />
        </Center>
        <BillingInfo />
        <SwitchButton label="Auto payment enable" />
        <Center className={classes.marginTop}>
          <CustomeLink 
            label="Cancel Plan"
            underline={true}
          />
        </Center>
      </div>
    </div>
  )
}

export default PlanAndBilling