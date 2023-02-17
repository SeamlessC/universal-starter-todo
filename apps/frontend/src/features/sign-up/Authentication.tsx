import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Title,
    Text,
    Anchor,
    List,
    ThemeIcon,
  } from '@mantine/core';

import SignUpImg from '../../assets/sign-up-img.png'
import Btn from '../profile-ui/Btn';
import CustomeLink from '../profile-ui/Links';

import FireIcon from '../../assets/fire-icon.png'
  
  const useStyles = createStyles((theme) => ({
    mainContainer: {
        background: theme.fn.linearGradient(-30, "#F74A2A", "#00062E"),
        height: window.innerHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
      height: "80%",
      width: "70%",
      backgroundSize: 'cover',
    //   backgroundImage:
    //     'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
      background: theme.white,
      display: "flex",
      justifyContent: "right",
      position: "relative",
      padding: "5%"
    },
    orangeCircularShapeBox: {
        background: theme.colors.orange[6],
        width: "150px",
        height: "40%",
        position: "absolute",
        left: "6%",
        borderBottomLeftRadius: "75px",
        borderBottomRightRadius: "75px",
        zIndex: 1,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "none",
        },
    },
    imageContainer: {
        zIndex: 2,
        position: "absolute",
        left: "12%",
        top: "20%",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "none",
        },
    },
    listContainer: {
        position: "absolute",
        zIndex: 3,
        top: "60%",
        left: "6%",
        width: "40%",
    },
  
    form: {
      width: (window.innerWidth/3),
      paddingTop: 80,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },

    loginBtnContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    logo: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      width: 120,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
  
  export function Authentication() {
    const { classes } = useStyles();
    return (
      <div className={classes.mainContainer}>
          <div className={classes.wrapper}>

            {/* Right Side content */}
            <div className={classes.orangeCircularShapeBox}></div>
            <div className={classes.imageContainer}>
                <img src={SignUpImg} />
            </div>
            <div className={classes.listContainer}>
                <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            {/* <IconCircleCheck size={16} /> */}
                            <img src={FireIcon} width={20} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>No Credit Card Required</List.Item>
                    <List.Item>Includes All Features</List.Item>
                    <List.Item>Includes Your Own Product Specialist</List.Item>
                    <List.Item>Includes Unlimited Users & Data Sources</List.Item>
                </List>
            </div>

            {/* Left side form */}
            <Paper className={classes.form} radius={0} p={30}>
              <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                Start your 15-day free trial!
              </Title>
      
              <TextInput label="First Name" size="md" />
              <TextInput label="Last Name" mt="md" size="md" />
              <TextInput label="Company Website" mt="md" size="md" />
              <TextInput label="Email Address" mt="md" size="md" />
              <PasswordInput label="Password" mt="md" size="md"/>
              <div className={classes.loginBtnContainer}>
                  <Btn 
                    label="Start"
                    btnWidth="80%"
                  />
              </div>
      
              <Text align="center" mt="md">
                Have an account?{' '}
                <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
                  Login
                </Anchor>
              </Text>
              <Text align="center" mt="md">
                By starting you agree to our{' '}
                <CustomeLink label="terms and conditions" underline={true} />
              </Text>
            </Paper>
          </div>
      </div>
    );
  }