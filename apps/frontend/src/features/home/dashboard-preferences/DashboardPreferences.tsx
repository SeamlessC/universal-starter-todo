import React from "react";
import { createStyles, Button } from "@mantine/core";
import { AutocompleteLoading } from './Input';
import { useForm } from "@mantine/form";

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
    {label: "Dashboard Name", placeholder: "Dashboard Name", validationName: 'dashboardName'},
    {label: "Language(Region) & Currency", placeholder: "English(United States) - $", validationName: 'languageCurency'},
    {label: "Time Period", placeholder: "Monthly", validationName: 'timePeiod'},
    {label: "Password(Optional)", placeholder: "Password", validationName: 'password'},
];


// const inputs = () => {
//     return mockdata.map((e, i) => <AutocompleteLoading key={i} label={e.label} placeholder={e.placeholder} form={form} validationName={e.validationName}/>)
// }


function DashboardPreferences() {
   const { classes, theme } = useStyles();

   const form = useForm({
    initialValues: { dashboardName: '', languageCurency: '', timePeiod: '', password: '' },

    // functions will be used to validate values at corresponding key
    validate: {
        dashboardName: (value) => (value == null || value.length <= 0 ? 'Please Enter Dashboard Name' : null),
        languageCurency: (value) => (value == null || value.length <= 0 ? 'Please Enter Language(Region) & Currency' : null),
        timePeiod: (value) => (value == null || value.length <= 0 ? 'Please Enter Time Period' : null),
        password: (value) => (value == null || value.length <= 0 ? 'Please Enter Password' : null),
    },
  });

  const inputs = () => {
    return mockdata.map((e, i) => <AutocompleteLoading key={i} label={e.label} placeholder={e.placeholder} form={form} validationName={e.validationName}/>)
  }

  return (
    <div className={classes.main}>
        <div className={classes.label}>
            <div className={classes.desktopView}>Fill out your dashboard preferences</div>
            <div className={classes.mobileView}>Dashboard preferences</div>
        </div>
        <form onSubmit={form.onSubmit(console.log)} data-testid="preferences-form">
            <div className={classes.inputBox}>
                {inputs()}
                <div className={classes.continueBtnBox}>
                    <Button data-testid="Continue-target-btn" type="submit" className={classes.continueBtn} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Continue</Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default DashboardPreferences