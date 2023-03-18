import { Container } from "@mantine/core";
import React from "react";
import LogosUI from "../logos-ui/LogosUI";

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
				<LogosUI />
				{/* <CustomTemplates /> */}
				{/* <CreateCustomTemplate /> */}
			</Container>
		</>
	);
};

export default Home;
