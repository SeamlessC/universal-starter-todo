import { Container } from "@mantine/core";
import React from "react";
import DashboardUI from "../dashboard_ui/DashboardUI";

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
				{/* <CVSFileManager /> */}
				{/* <CVSTemplateCreation /> */}
				{/* <LogosUI /> */}
				{/* <CustomTemplates /> */}
				{/* <CreateCustomTemplate /> */}
				<DashboardUI />
			</Container>
		</>
	);
};

export default Home;
