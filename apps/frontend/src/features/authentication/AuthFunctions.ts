import {
	emailPasswordSignUp,
	emailPasswordSignIn,
	getAuthorisationURLWithQueryParamsAndSetState,
	thirdPartySignInAndUp,
} from "supertokens-web-js/recipe/thirdpartyemailpassword";
import Session from "supertokens-web-js/recipe/session";

export async function signInClicked(email: string, password: string) {
	try {
		const response = await emailPasswordSignIn({
			formFields: [
				{
					id: "email",
					value: email,
				},
				{
					id: "password",
					value: password,
				},
			],
		});

		if (response.status === "FIELD_ERROR") {
			response.formFields.forEach((formField) => {
				if (formField.id === "email") {
					// Email validation failed (for example incorrect email syntax).
					window.alert(formField.error);
				}
			});
		} else if (response.status === "WRONG_CREDENTIALS_ERROR") {
			window.alert("Email password combination is incorrect.");
		} else {
			// sign in successful. The session tokens are automatically handled by
			// the frontend SDK.
			window.location.href = "/home";
		}
	} catch (err: any) {
		if (err.isSuperTokensGeneralError === true) {
			// this may be a custom error message sent from the API by you.
			window.alert(err.message);
		} else {
			window.alert("Oops! Something went wrong.");
		}
	}
}

export async function signUpClicked(email: string, password: string) {
	try {
		const response = await emailPasswordSignUp({
			formFields: [
				{
					id: "email",
					value: email,
				},
				{
					id: "password",
					value: password,
				},
			],
		});
		if (response.status === "FIELD_ERROR") {
			// one of the input formFields failed validaiton
			response.formFields.forEach((formField) => {
				if (formField.id === "email") {
					// Email validation failed (for example incorrect email syntax),
					// or the email is not unique.
					window.alert(formField.error);
				} else if (formField.id === "password") {
					// Password validation failed.
					// Maybe it didn't match the password strength
					window.alert(formField.error);
				}
			});
		} else {
			// sign up successful. The session tokens are automatically handled by
			// the frontend SDK.
			console.log("Signup Success");
			window.location.href = "/";
		}
	} catch (err: any) {
		if (err.isSuperTokensGeneralError === true) {
			// this may be a custom error message sent from the API by you.
			window.alert(err.message);
		} else {
			window.alert("Oops! Something went wrong. sergaerg");
		}
	}
}

export async function googleSignInClicked() {
	try {
		const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
			providerId: "google",

			// This is where Google should redirect the user back after login or error.
			// This URL goes on the Google's dashboard as well.
			authorisationURL: "http://localhost:3000/auth/callback/google",
		});

		/*
        Example value of authUrl: https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&client_id=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com&state=5a489996a28cafc83ddff&redirect_uri=https%3A%2F%2Fsupertokens.io%2Fdev%2Foauth%2Fredirect-to-app&flowName=GeneralOAuthFlow
        */

		// we redirect the user to google for auth.
		window.location.assign(authUrl);
	} catch (err: any) {
		if (err.isSuperTokensGeneralError === true) {
			// this may be a custom error message sent from the API by you.
			window.alert(err.message);
		} else {
			window.alert("Oops! Something went wrong. from googleSignInClicked");
		}
	}
}

export async function handleGoogleCallback() {
	try {
		const response = await thirdPartySignInAndUp();

		if (response.status === "OK") {
			console.log(response.user);
			if (response.createdNewUser) {
				// sign up successful
				window.alert("New User");
			} else {
				// sign in successful
				window.alert("Login Success");
			}
			window.location.assign("/home");
		} else {
			// SuperTokens requires that the third party provider
			// gives an email for the user. If that's not the case, sign up / in
			// will fail.

			// As a hack to solve this, you can override the backend functions to create a fake email for the user.

			window.alert("No email provided by social login. Please use another form of login");
			window.location.assign("/auth"); // redirect back to login page
		}
	} catch (err: any) {
		if (err.isSuperTokensGeneralError === true) {
			// this may be a custom error message sent from the API by you.
			window.alert(err.message);
		} else {
			window.alert("Oops! Something went wrong. from handleGoogleCallback");
		}
	}
}

export async function logout () {
	await Session.signOut(); 
	window.location.href = "/";
  }
