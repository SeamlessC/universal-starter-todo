import React from "react";
import "./App.css";
import { Authentication } from "./features/authentication/Authentication";
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shell from "./features/shell/Shell";

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
	// return (
	// 	// <RelayEnvironmentProvider environment={relayEnv}>
	// 	<Suspense fallback={"Loading..."}>
	// 		<div className="App">
	// 			{/* <Shell></Shell> */}
	// 			<Authentication />
	// 		</div>
	// 	</Suspense>
	// 	// </RelayEnvironmentProvider>
	// );

	return (
		// <RelayEnvironmentProvider environment={relayEnv}>
		<Suspense fallback={"Loading..."}>
			<div className="App">
				{/* <Shell></Shell> */}
				<Router>
					<Routes>
						<Route>
							<Route path="/" element={<Authentication />} />
							<Route path="/auth/callback/google" element={<Authentication />} />
							<Route path="/home" element={<Shell />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</Suspense>
		// </RelayEnvironmentProvider>
	);
}

export default App;
