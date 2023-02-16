import { Card, createStyles, Image, TextInput, Select, Group, Grid } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    dashboardHeader: {
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        marginTop: "-35px",
        padding: "2% 5%",
        background: theme.white,
    },
    search: {
        width: "50%",
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '70%',
        },
    },
    selectionSection: {
        width: "35%",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100%',
        },
    }
}));

function DashBoardUIHeader() {
  const { classes, theme } = useStyles();

  return (
    // <Card.Section>
        <div className={classes.dashboardHeader}>
            <Group position="apart" mt="md" mb="xs">
                <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={50}
                    width={50}
                    alt="Norway"
                />
                <TextInput
                    placeholder="Add Title for Your Dashboard"
                    radius="xs"
                    size="md"
                    variant="unstyled"
                    className={classes.search}
                />
                <Grid className={classes.selectionSection}>
                    <Grid.Col span={6}>
                        Report For
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Select
                            searchable
                            placeholder="Pick one"
                            data={[
                                { value: 'weekly', label: 'Weekly' },
                                { value: 'ng', label: 'Angular' },
                                { value: 'svelte', label: 'Svelte' },
                                { value: 'vue', label: 'Vue' },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            label="From"
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            label="From"
                        />
                    </Grid.Col>
                </Grid>
            </Group>
        </div>
    // </Card.Section>
  )
}

export default DashBoardUIHeader