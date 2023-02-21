import { Container } from "@mantine/core";
import React from "react";
import CVSFileManager from "../cvs-file-manager/cvs-file-manager/CVSFileManager";
import { ProfileUI } from "../profile-ui/ProfileUI";
import { HomeDashboard } from "./HomeDashboard";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Container size="md">
				{/* <QueryFragContainer<TodosQuery>
					query={todosQ}
					variables={{ first: 50 }}
					render={(data) => <Todos todoKey={data} categoryKey={data}></Todos>}
				></QueryFragContainer> */}
				{/* <HomeDashboard /> */}
				{/* <ProfileUI /> */}
				<CVSFileManager />
			</Container>
		</>
	);
};

export default Home;
