import React from "react";
import "./App.css";
import Shell from "./features/shell/Shell";
import { Authentication } from "./features/authentication/Authentication";

const { Suspense } = React;

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
