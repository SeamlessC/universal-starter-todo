import { createStyles, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import Btn from '../profile-ui/Btn'

const useStyles = createStyles((theme) => ({
  loginBtnContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "5%",
  },
}));

function AuthenticationForm() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      fName: '',
      lName: '',
      companyWebsite: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password must be at least 6 characters' : null),
      fName : (val) => (val.length < 3 ? "First name must be at least 3 characters" : null ),
      lName : (val) => (val.length < 3 ? "Last name must be at least 3 characters" : null ),
      companyWebsite : (val) => (val.length <= 3 ? "Enter valid value" : null ),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput 
        label="First Name" 
        size="md" 
        error={form.errors.fName}
        value={form.values.fName}
        onChange={(event) => form.setFieldValue('fName', event.currentTarget.value)}
      />
      <TextInput 
        label="Last Name" 
        size="md" 
        mt="md"
        error={form.errors.lName}
        value={form.values.lName}
        onChange={(event) => form.setFieldValue('lName', event.currentTarget.value)}
      />
      <TextInput 
        label="Company Website" 
        size="md" 
        mt="md"
        error={form.errors.companyWebsite}
        value={form.values.companyWebsite}
        onChange={(event) => form.setFieldValue('companyWebsite', event.currentTarget.value)}
      />
      <TextInput 
        label="Email Address" 
        size="md" 
        mt="md"
        error={form.errors.email}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
      />
      <PasswordInput 
        label="Password" 
        mt="md" 
        size="md"
        error={form.errors.password}
        value={form.values.password}
        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
      />
      <div className={classes.loginBtnContainer}>
        <Btn 
          label="Start"
          btnWidth="80%"
          type="submit"
        />
      </div>
    </form>
  )
}

export default AuthenticationForm