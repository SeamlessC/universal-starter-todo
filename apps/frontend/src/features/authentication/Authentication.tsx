import { useToggle } from "@mantine/hooks";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { useEffect } from "react";
import { handleGoogleCallback } from "./AuthFunctions";

export function Authentication() {
	const [type, toggle] = useToggle(["login", "register"]);

	useEffect(() => {
		handleGoogleCallback()
	})

	return (
		<div>
			{type === "register" && <SignUp type={type} toggle={toggle} />}
			{type === "login" && <Login type={type} toggle={toggle} />}
		</div>
	);
}
