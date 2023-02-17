import {
    Paper,
    createStyles,
    Title,
    Text,
    Anchor,
    List,
    ThemeIcon,
    ScrollArea,
  } from '@mantine/core';

import SignUpImg from '../../assets/sign-up-img.png'
import CustomeLink from '../profile-ui/Links';

import FireIcon from '../../assets/fire-icon.png'
import GraphIcon from '../../assets/graph-icon.png'

import AuthenticationForm from './AuthenticationForm';
import CircularImages from './CircularImages';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter-icon.png'
import YoutubeIcon from '../../assets/youtube-icon.png'
  
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
      background: theme.white,
      display: "flex",
      justifyContent: "right",
      position: "relative",
      paddingRight: "5%"
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
    shadowBox: {
        boxShadow: '1px 2px 9px #d6d6d4',
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
    graphImg: {
        position: "absolute",
        top:"15%",
        left: "35%",
        zIndex: 4,
    },
    circularIcons: {
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
        top: "66%",
        left: "6%",
        width: "40%",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "none",
        },
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
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));
  
  export function SignUp(auth: {type: any, toggle: any}) {
    const { classes, theme } = useStyles(); 

    return (
      <div className={classes.mainContainer}>
          <div className={classes.wrapper}>

            {/* Right Side content */}
            <div className={classes.orangeCircularShapeBox}></div>
            <div className={classes.imageContainer}>
                <img src={SignUpImg} className={classes.shadowBox} />
            </div>
            <img src={GraphIcon} width={70} className={classes.graphImg + " " + classes.shadowBox + " " + classes.circularIcons} />
            <div className={classes.circularIcons}>
              <CircularImages img={GraphIcon} top="40%" left="6%" />
              <CircularImages img={FacebookIcon} top="52%" left="8%" size="sm" />
              <CircularImages img={TwitterIcon} top="55%" left="16%" size="sm" />
              <CircularImages img={YoutubeIcon} top="45%" left="20%" size="lg" />
            </div>
            <div className={classes.listContainer}>
                <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
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

              <ScrollArea><AuthenticationForm type={auth.type} /></ScrollArea>
              
              <Text align="center" mt="md">
                Have an account?{' '}
                <Anchor<'a'> href="#" weight={700} onClick={() => auth.toggle()}>
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