import React from "react";
import "./App.css";
import { Authentication } from "./features/authentication/Authentication";
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

const { Suspense } = React;

SuperTokens.init({
	appInfo: {
		apiBasePath: "/auth",
		appName: "Analytica",
		apiDomain: "http://localhost:3001",
	},
	recipeList: [Session.init(), ThirdPartyEmailPassword.init()],
});

function App() {
	return (
		// <RelayEnvironmentProvider environment={relayEnv}>
		<Suspense fallback={"Loading..."}>
			<div className="App">
				{/* <Shell></Shell> */}
				<Authentication />
			</div>
		</Suspense>
		// </RelayEnvironmentProvider>
	);
}

export default App;
