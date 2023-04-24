import { createStyles, Grid, TextInput } from '@mantine/core'
import Btn from '../Btn'

const useStyle = createStyles((theme) => ({
    mainContainer: {
        position: "relative",
        marginTop: "3%",
    },
    inputBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "90%",
    }
}))

function BillingInput(input: {btnVarient?: string, inputLabel: string, btnLabel: string, placeholder: string, form: any, formData: string}) {
    const { classes, theme } = useStyle()

  return (
    <form onSubmit={input.form.onSubmit(console.log)}>
        <Grid className={classes.mainContainer}>
            <Grid.Col span={8}>
                <TextInput
                    placeholder={input.placeholder}
                    label={input.inputLabel}
                    withAsterisk
                    {...input.form.getInputProps(input.formData)}
                />
            </Grid.Col>
            <Grid.Col span={4}  className={classes.inputBtn}>
                <Btn 
                    label={input.btnLabel}
                    btnWidth="100%"
                    varient={input.btnVarient ?? undefined}
                    type='submit'
                />
            </Grid.Col>
        </Grid>
    </form>
  )
}

export default BillingInput