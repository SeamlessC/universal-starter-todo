import { ActionIcon, Button, createStyles, Drawer, Grid, Stack, Tabs } from '@mantine/core'
import { useState } from 'react'
import rightArrow from '../../../assets/right-arrow.png';
import DrawerPresets from './DrawerPresets';
import DrawerSettingsSection from './DrawerSettingsSection';
import DrawerThemes from './DrawerThemes';
import DrawerWidgets from './DrawerWidgets';

const useStyles = createStyles((theme) => ({
    drawerBtn: {
        position: "fixed",
        top: "50%",
        bottom: "50%",
        right: 0,
    },
    drawerTabs: {

    },
    drawerShareContainer: {
        boxShadow: '0px -2px 5px gray',
        height: "500px",
    }
}));

function DashboardUIDrawer() {
  const [opened, setOpened] = useState(false);
  const { classes, theme } = useStyles();
  
  return (
    <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            // padding="xl"
            size="xl"
            position="right"
            // overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        >

            <div>
                <Tabs defaultValue="presets" color="orange">
                    <Tabs.List grow>
                        <Tabs.Tab value="presets" className={classes.drawerTabs} >PRESETS</Tabs.Tab>
                        <Tabs.Tab value="widgets" className={classes.drawerTabs} >WIDGETS</Tabs.Tab>
                        <Tabs.Tab value="themes" className={classes.drawerTabs} >THEMES</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="presets" pt="xs">
                        <Stack 
                            justify="space-between" 
                            spacing="xs" sx={(theme) => ({ 
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white, 
                                height: window.innerHeight-100 
                            })}
                        >
                            <DrawerPresets />
                            <div style={{ height: (window.outerHeight/3)}} className={classes.drawerShareContainer}>
                                <DrawerSettingsSection />
                            </div>
                        </Stack>
                    </Tabs.Panel>

                    <Tabs.Panel value="widgets" pt="xs">
                        <Stack 
                            justify="space-between" 
                            spacing="xs" sx={(theme) => ({ 
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white, 
                                height: window.innerHeight-100 
                            })}
                        >
                            <DrawerWidgets />
                            <div style={{ height: window.outerHeight/3 }} className={classes.drawerShareContainer}>
                                <DrawerSettingsSection />
                            </div>
                        </Stack>
                    </Tabs.Panel>

                    <Tabs.Panel value="themes" pt="xs">
                        <DrawerThemes />
                    </Tabs.Panel>
                </Tabs>
            </div>
            
            {/* <Stack 
                justify="space-between" 
                spacing="xs" sx={(theme) => ({ 
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white, 
                    height: window.innerHeight-100 
                })}
            >
                <div style={{ height: (window.outerHeight/3)*2}}>
                    <Tabs defaultValue="presets" color="orange">
                        <Tabs.List grow>
                            <Tabs.Tab value="presets" className={classes.drawerTabs} >PRESETS</Tabs.Tab>
                            <Tabs.Tab value="widgets" className={classes.drawerTabs} >WIDGETS</Tabs.Tab>
                            <Tabs.Tab value="themes" className={classes.drawerTabs} >THEMES</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="presets" pt="xs">
                            <Stack 
                                justify="space-between" 
                                spacing="xs" sx={(theme) => ({ 
                                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white, 
                                    height: window.innerHeight-100 
                                })}
                            >
                                <DrawerPresets />
                            <div style={{ height: window.outerHeight/3, background: "orange"}}>
                                dfg
                            </div>
                            </Stack>
                        </Tabs.Panel>

                        <Tabs.Panel value="widgets" pt="xs">
                            <DrawerWidgets />
                        </Tabs.Panel>
                        
                        <Tabs.Panel value="themes" pt="xs">
                            <DrawerThemes />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </Stack> */}
        </Drawer>

        <ActionIcon size="lg" variant="light" className={classes.drawerBtn}>
            <img 
                src={rightArrow} 
                width={20} 
                onClick={() => setOpened(true)} 
            />
        </ActionIcon>
    </>
  )
}

export default DashboardUIDrawer