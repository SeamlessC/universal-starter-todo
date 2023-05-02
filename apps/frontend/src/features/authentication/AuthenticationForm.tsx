import { createStyles, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import Btn from '../profile-ui/Btn'
import CustomeLink from '../profile-ui/Links';

const useStyles = createStyles((theme) => ({
  loginBtnContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "5%",
  },
  passwordContainer: {
    position: "relative",
  },
  forgotPWLink: {
    position: "absolute",
    top: 0,
    right: 0,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  }
}));

function AuthenticationForm(authForm: {type: any}) {
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

      {authForm.type === 'register' && (
        <div>
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
        </div>
      )}

      <TextInput 
        label="Email Address" 
        size="md" 
        mt="md"
        error={form.errors.email}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
      />
      <div className={classes.passwordContainer}>
        {authForm.type === 'login' && (
          <div className={classes.forgotPWLink}>
            <CustomeLink label="Forgot your password?" />
          </div>
        )}
        <PasswordInput 
          label="Password" 
          mt="md" 
          size="md"
          error={form.errors.password}
          value={form.values.password}
          onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
        />
      </div>
      
      <div className={classes.loginBtnContainer}>
        <Btn 
          label={authForm.type == "register" ? "Start" : "Login"}
          btnWidth="80%"
          type="submit"
        />
      </div>
    </form>
  )
}

export default AuthenticationForm