import { Container } from "@mantine/core";
import React from "react";
import CreateCustomTemplate from "../create-custom-template/CreateCustomTemplate";
import CustomTemplates from "../custom-templates/CustomTemplates";
import CVSFileManager from "../cvs-file-manager/cvs-file-manager/CVSFileManager";
import { CVSTemplateCreation } from "../cvs-file-manager/template-creation/CVSTemplateCreation";
import LogosUI from "../logos-ui/LogosUI";
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
				{/* <CVSFileManager /> */}
				{/* <CVSTemplateCreation /> */}
				{/* <LogosUI /> */}
				{/* <CustomTemplates /> */}
				<CreateCustomTemplate />
			</Container>
		</>
	);
};

export default Home;
