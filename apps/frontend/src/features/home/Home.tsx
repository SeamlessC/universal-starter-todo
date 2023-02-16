import { Container } from "@mantine/core";
import React from "react";
import DashboardUI from "../dashboard_ui/DashboardUI";
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
				<DashboardUI />
				
			</Container>
		</>
	);
};

export default Home;
