import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shell from "./features/shell/Shell";

const { Suspense } = React;

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
							<Route path="/" element={<Shell />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</Suspense>
		// </RelayEnvironmentProvider>
	);
}

export default App;
