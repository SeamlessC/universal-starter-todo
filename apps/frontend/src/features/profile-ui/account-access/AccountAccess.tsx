import { Anchor, Checkbox, createStyles, Flex, Text, Title } from '@mantine/core'
import React, { useState } from 'react'
import Btn from '../Btn'
import Link from '../Links'
import ProfileDataInput from '../profile-info/ProfileDataInput'
import { useForm } from '@mantine/form'

const useStyle = createStyles((theme) => ({
  marginTop: {
    marginTop: "6%",
  },
  inputBox: {
    margin: "5% 10% 5% 20%",
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      margin: "0%",
    },
  }
}))

function AccountAccess() {
  const { classes, theme } = useStyle()
  // const [cPw, setCPw] = useState("")
  // const [newPw, setNPw] = useState("")
  // const [rePw, setRePw] = useState("")
  const [checked, setChecked] = useState(true)

  const form = useForm({
    initialValues: { cPw: '', nPw: '', rePw: '' },
    validate: {
      cPw: (value) => (value.length < 3 ? 'Current password must have at least 3 letters' : null),
      nPw: (value) => (value.length < 6 ? 'New password must have at least 6 letters' : null),
      rePw: (value) => (value.length < 6 ? 'Please insert the same password' : null),
    },
  });

  return (
    <div>
      <Title weight={400}>
        Change Password
      </Title>
      <Text color={theme.colors.gray[6]} className={classes.marginTop}>
        Create a new password that is at least 8 characters long.
      </Text>
      <form onSubmit={form.onSubmit(console.log)} className={classes.inputBox}>
        <ProfileDataInput
          label="Type your current password"
          placeholder="Current Password"
          setData={undefined}
          withAsterisk={true}
          form={form} 
          formData={'cPw'} 
        />
        <ProfileDataInput
          label="Type your New password"
          placeholder="New password"
          setData={undefined}
          withAsterisk={true}
          form={form} 
          formData={'nPw'} 
        />
        <ProfileDataInput
          label="Retype your new password"
          placeholder="Reype new password"
          setData={undefined}
          withAsterisk={true} 
          form={form} 
          formData={'rePw'}        
        />
        <Flex
            align="center"
            wrap="wrap"
            direction="column"
            gap={{ base: 'sm', sm: 'lg' }}
            justify={{ sm: 'center' }}
          >
            <Checkbox 
              label="Require all devices to sign in with new password" 
              className={classes.marginTop} 
              checked={checked} 
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <Btn 
              label="Save Password"
              btnWidth="50%"
              marginTop="4%"
              type='submit'
            />
            <Link 
              label="Forgot Password"
              underline={true}
            />
          </Flex>
      </form>
    </div>
  )
}

export default AccountAccess