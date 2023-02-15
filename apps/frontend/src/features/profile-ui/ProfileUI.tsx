import { Box, createStyles, Grid, Group, MediaQuery, NavLink, Text, Stack, Title, Burger, Drawer, Button } from '@mantine/core';
import { useState } from 'react';
import AccountAccess from './account-access/AccountAccess';
import Invoices from './invoices/Invoices';
import Logout from './logout/Logout';
import PlanAndBilling from './plan-billing/PlanAndBilling';
import ProfileInfo from './profile-info/ProfileInfo';
import SecuritySetting from './security-settings/SecuritySetting';
import UserManagement from './user-management/UserManagement';

const useStyle = createStyles((theme) => ({
    mainContainer: {
        marginTop: "50px",
    },
    profileContainer:{
        background: theme.white,
        // height: (window.innerHeight/4)*3,
        marginTop: "30px",
        padding: "10px",
    },
    navContainer: {
        // height: "100%",
        display: "block",
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            display: "none",
        },
    },
    smallView: {
        display: "none",
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            display: "block",
        },
    }
}))

const data = [
    { label: 'Profile Info', },
    { label: 'Plan & Billing' },
    { label: 'Invoices' },
    { label: 'Account Access'},
    { label: 'User Management' },
    { label: 'Security Settings' },
    { label: 'Logout' },
];

export function ProfileUI() {
  const { classes, theme } = useStyle()
  const [active, setActive] = useState(0)
  const [opened, setOpened] = useState(false);

  var name = "Maneesha";

  return (
    <div className={classes.mainContainer}>
        <Group>
            <Title>Hello! Good Evening, </Title>
            <Title weight={100}>{name}</Title>
        </Group>

        <Burger
            opened={opened}
            onClick={() => {
                setOpened((o) => !o)
            }}
            className={classes.smallView}
        />
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Register"
            padding="xl"
            size="xl"
        >
            <Stack justify="space-between">
                {
                    data.map((item, index) => (
                        <NavLink
                            key={item.label}
                            active={index === active}
                            label={item.label}
                            onClick={() => {
                                setActive(index)
                                setOpened(false)
                            }}
                        />
                    ))
                }
            </Stack>
        </Drawer>

        <Grid className={classes.profileContainer}>
            <Grid.Col md={0} lg={3}>
                <Stack justify="space-between" className={classes.navContainer}>
                    {
                        data.map((item, index) => (
                            <NavLink
                              key={item.label}
                              active={index === active}
                              label={item.label}
                              onClick={() => setActive(index)}
                            />
                        ))
                    }
                </Stack>
            </Grid.Col>

            <Grid.Col md={12} lg={8}>
                <div style={{margin: "4% 0% 4% 4%"}}>
                    {/* <ScrollArea> */}
                        {
                            active == 0 ? 
                                <ProfileInfo />
                            : active == 1 ?
                                <PlanAndBilling />
                            : active == 2 ?
                                <Invoices />
                            : active == 3 ?
                                <AccountAccess />
                            : active == 4 ?
                                <UserManagement />
                            : active == 5 ? 
                                <SecuritySetting />
                            : <Logout />                     
                        }
                    {/* </ScrollArea> */}
                </div>
            </Grid.Col>
        </Grid>
    </div>
  );
}