import { createStyles, Button } from "@mantine/core";
import { AutocompleteLoading } from './Input';

const useStyles = createStyles((theme) => ({
	main: {
		background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
		padding: "2% 3%",
		borderRadius: theme.radius.md,
        marginBottom: "3%",
	},
	label: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark,
        fontWeight: 700,
        fontSize: "25px",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        padding: "3% 2.5% 0",
	},
    inputBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3%",
        flexDirection: "column",
    },
    continueBtnBox: {
        marginTop: "3%",
        width: "30%",
        background: "red",
        borderRadius: "5px",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "50%",
        },
    },
    continueBtn: {
        width: "100%",
    },
    mobileView: {
        display: "none",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: "block",
        },
    },
    desktopView: {
        display: "block",
        [`@media (max-width: 800px)`]: {
            display: "none",
        },
    }
}));

const mockdata = [
    {label: "Dashboard Name", placeholder: "Dashboard Name"},
    {label: "Language(Region) & Currency", placeholder: "English(United States) - $"},
    {label: "Time Period", placeholder: "Monthly"},
    {label: "Password(Optional)", placeholder: "Password"},
];


const inputs = () => {
    return mockdata.map((e, i) => <AutocompleteLoading label={e.label} placeholder={e.placeholder}/>)
}


function DashboardPreferences() {
   const { classes, theme } = useStyles();

  return (
    <div className={classes.main}>
        <div className={classes.label}>
            <div className={classes.desktopView}>Fill out your dashboard preferences</div>
            <div className={classes.mobileView}>Dashboard preferences</div>
        </div>
        <div className={classes.inputBox}>
            {inputs()}
            <div className={classes.continueBtnBox}>
                <Button className={classes.continueBtn} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default DashboardPreferences