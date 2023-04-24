import { ActionIcon, Button, createStyles, FileButton, Grid, Group, Stack, Title } from '@mantine/core'
import UserImg from '../../../assets/default-user.png'
import CameraIcon from '../../../assets/camera.png'
import ProfileDataInput from './ProfileDataInput'
import { useEffect, useState } from 'react'
import Btn from '../Btn'
import { useForm } from '@mantine/form'

const useStyle = createStyles((theme) => ({
  imgDiv: {
    width: "70%",
    position: "relative",
  },
  avatar: {
      objectFit: "cover",
      borderRadius: "50%",
      width: "100%",
  }, 
  overlay: {
    position: "absolute",
    bottom: "10%",
    right: 0,
  },
  basicInfoContainer: {
    marginBottom: "10%",
  },
  btnsContainer: {
    marginTop: "10%",
  }
}))

function ProfileInfo() {
  const { classes, theme } = useStyle()
  // const [ name, setName ] = useState()
  // const [ email, setEmail ] = useState()
  // const [ lname, setLName ] = useState()
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file)
  }, [file])

  const form = useForm({
    initialValues: { name: '', email: '', administrativeEmail: '', lname: '' },
    validate: {
      name: (value) => (value.length < 3 ? 'Fullname must have at least 3 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      administrativeEmail: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      lname: (value) => (value.length < 3 ? 'Lastname must have at least 3 letters' : null),
    },
  });
  
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <Grid>
        <Grid.Col span={4}>
          <div className={classes.imgDiv}>
            <img src={UserImg} id="output" className={classes.avatar} />
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <ActionIcon color="orange" radius="xl" variant="light" className={classes.overlay}>
                  <img {...props} src={CameraIcon} width={15} height={15} />
                </ActionIcon>
              )}
            </FileButton>
          </div>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack justify="space-between">
            <div className={classes.basicInfoContainer}>
              <Title order={2}>About You</Title>
              {/* <ProfileDataInput label='Full Name' placeholder='Enter full name' setData={setName}/>
              <ProfileDataInput label='Last Name' placeholder='Enter last name' setData={setLName}/>
              <ProfileDataInput label='Email Address' placeholder='Enter email address' setData={setEmail}/> */}
              <ProfileDataInput label='Full Name' placeholder='Enter full name' form={form} formData='name' setData={undefined}/>
              <ProfileDataInput label='Last Name' placeholder='Enter last name' setData={undefined} form={form} formData='lname'/>
              <ProfileDataInput label='Email Address' placeholder='Enter email address' setData={undefined} form={form} formData='email'/>
            </div>
            <ProfileDataInput label='Administrator Email' placeholder='Enter administrator email' setData={undefined} form={form} formData='administrativeEmail'/>
          </Stack>
        </Grid.Col>
        <Grid.Col span={12}>
          <Group position="apart" className={classes.btnsContainer}>
            <Btn 
              label='Cancel'
              varient="subtle" 
              textColor={theme.colors.orange[7]}   
              onClick={() => form.reset()}       
            />
            <Btn 
              type='submit'
              label='Save Changes'
              bgColor={theme.colors.orange[7]} 
              textColor={theme.white}  
              // disabled={true}        
            />
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  )
}

export default ProfileInfo