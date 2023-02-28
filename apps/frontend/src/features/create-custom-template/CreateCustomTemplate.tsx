import { createStyles, Divider, Grid, ScrollArea, Text, Textarea, TextInput, Title } from '@mantine/core'
import { hasLength, useForm } from '@mantine/form'
import Btn from '../profile-ui/Btn'
import CustomeLink from '../profile-ui/Links'
import Search from '../widgets/Search'

const useStyles = createStyles((theme) => ({
    background: {
        background: theme.white,
        borderRadius: theme.radius.md,
        padding: "20px 30px",
        height: window.innerHeight/5* 3.7
    },
    grayText: {
        color: theme.colors.gray[6],
    },
    horizontalCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    scrollArea: {
        height: "100%", 
        width: "100%", 
        marginTop: "8%",
    }
}))

const dashboardList = [
    {name: "AAAAAAAA AAAAA"},
    {name: "BBBBBBBBBB AAAAA"},
    {name: "VVVVVVVVVV AAAAA"},
    {name: "CCCCCCCCCC AAAAA"},
    {name: "SSSSSSS AAAAA"},
    {name: "WWWWWWWWW AAAAA"},
    {name: "AAAAAAAA AAAAA"},
    {name: "BBBBBBBBBB AAAAA"},
    {name: "VVVVVVVVVV AAAAA"},
    {name: "CCCCCCCCCC AAAAA"},
    {name: "SSSSSSS AAAAA"},
    {name: "WWWWWWWWW AAAAA"},
]

function CreateCustomTemplate() {
  const { classes, theme } = useStyles()

  const form = useForm({
    initialValues: { templateName: '', description: '',},

    // functions will be used to validate values at corresponding key
    validate: {
      templateName: hasLength({ min: 3, max: 150 }, 'Min 3 Characters to Max 150 characters'),
      description: (value) => (value.length > 150 ? 'Max 150 characters' : null),
    },
  });

  return (
    <div>
        <form onSubmit={form.onSubmit(console.log)}>
            <Title order={1} mt={30}>Create a New Custom Template</Title>
            <Grid mt={20} gutter="sm">
                {/* <Grid.Col span={8} order={2} orderSm={1} orderLg={1}> */}
                <Grid.Col md={12} lg={8} order={1} orderSm={1} orderLg={1}>
                    <div className={classes.background}>
                        <Text fz="lg" fw={500}>Structure Definition</Text>
                        <Text mt={20} fz="sm" className={classes.grayText}>
                            eigh igaeg aiehg giahhegaegbaierg aeiurg aeiguae gaeiug eirgiaeurg eligerg
                            whh aiehgliae gialeurgerg.
                        </Text>
                        <Text mt={15} fz="sm" className={classes.grayText}>
                            rhie gaieurg aeirhgae gaeurg aeihga iae eg uegaeg aleug ueaghaeg aeirgiuae 
                            ier seiuhgae gege eiurhgaeirug iurhgi iregh;la giregh; iuhlj ibzdj srtihrth 
                            rhie gaieurg aeirhgae gaeurg aeihga iae eg uegaeg aleug ueaghaeg aeirgiuae 
                            ier seiuhgae gege eiurhgaeirug iurhgi iregh;la giregh; iuhlj ibzdj srtihrth 
                            <CustomeLink label="Read more details here." underline={true} />
                        </Text>
                        {/* <form onSubmit={form.onSubmit(console.log)}> */}
                            <TextInput mt={30} label="Template Name" {...form.getInputProps('templateName')} />
                            <Textarea mt={30} minRows={5} label="Template Description (Optional)" {...form.getInputProps('description')} />
                            {/* <Btn label="Submit" type="submit" /> */}
                        {/* </form> */}
                    </div>
                </Grid.Col>
                {/* <Grid.Col span={4} order={1} orderSm={2} orderLg={2}> */}
                <Grid.Col md={12} lg={4} order={2} orderSm={2} orderLg={2}>  
                    <div className={classes.background + " " + classes.horizontalCenter}>
                        <Text fz="lg" fw={500}>Choose Dashboard</Text>
                        <Text mt={20} mb={30} fz="sm" className={classes.grayText}>
                            eigh igaeg aiehg giahhegaegbaierg aeiurg aeiguae gaeiug eirgiaeurg eligerg
                            whh aiehgliae gialeurgerg.
                        </Text>
                        <Search placeholder="Search Dashboards..." width="100%" />
                        <ScrollArea className={classes.scrollArea} scrollbarSize={2}>
                            {
                                dashboardList.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <Text>{e.name}</Text>
                                            <Divider my="sm" />
                                        </div>
                                    )
                                })
                            }
                        </ScrollArea>
                        <Btn type="submit" label="Create Template" marginTop="20px" btnWidth="100%" />
                    </div>
                </Grid.Col>
            </Grid>
        </form>
    </div>
  )
}

export default CreateCustomTemplate