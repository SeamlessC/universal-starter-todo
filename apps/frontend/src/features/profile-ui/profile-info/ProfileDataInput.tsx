import { createStyles, TextInput } from '@mantine/core'
import React from 'react'

const useStyle = createStyles((theme) => ({
  marginTop: {
    marginTop: "10px",
  }
}))

function ProfileDataInput(input: {label: string, placeholder: string, setData: any, withAsterisk?: boolean, form: any, formData: string}) {
  const { classes, theme } = useStyle()

  return (
    <TextInput
        placeholder={input.placeholder}
        label={input.label}
        // onChange={(val) => input.setData(val.target.value)}
        className={classes.marginTop}
        withAsterisk={input.withAsterisk == true ? true : false}
        {...input.form.getInputProps(input.formData)}
    />
  )
}

export default ProfileDataInput