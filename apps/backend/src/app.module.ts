import { HttpException, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { DateScalar } from "./_common/scalars/date.scalar";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { TodoModule } from "./todo/todo.module";
import { SubTaskModule } from "./sub-task/sub-task.module";
import { CategoryModule } from "./category/category.module";
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		AuthModule.forRoot({
			connectionURI: "https://dev-4bb51dc1c58011ed9a2ec180b8e4d5ef-us-east-1.aws.supertokens.io:3573",
			apiKey: "u6DSmenwGue7wg1cMVFKLDyETtMLDD",
			appInfo: {
			  appName: "Analytica",
			  apiDomain: "http://localhost:3333",
			  websiteDomain: "http://localhost:3000",
			  apiBasePath: "/auth",
			  websiteBasePath: "/auth"
			},
		}),
		ConfigModule.forRoot({ envFilePath: [".env", ".env.dev", ".env.prod"], isGlobal: true, cache: true }),
		TypeOrmModule.forRoot({
			type: "mysql",
			database: process.env.DATABASE_NAME ?? "universal_todo",
			host: "localhost",
			port: 3306,
			username: process.env.DATABASE_USERNAME ?? "root",
			password: process.env.DATABASE_PASSWORD ?? "root",
			// type: "postgres",
			// database: "test",
			// port: 5432,
			// username: "postgres",
			// password: "kl;'",
			synchronize: true,
			autoLoadEntities: true,
		}),
		GraphQLModule.forRoot<MercuriusDriverConfig>({
			driver: MercuriusDriver,
			errorFormatter: (execution) => {
				const [error] = execution.errors; // take first error
				const originalError = error?.originalError;
				if (originalError instanceof HttpException)
					return {
						statusCode: originalError.getStatus(),
						response: { data: originalError.getResponse() as any },
					};
				return { statusCode: 400, response: execution };
			},
			graphiql: false,
			autoSchemaFile: "./../frontend/schema.graphql",
		}),
		UserModule,
		TodoModule,
		SubTaskModule,
		CategoryModule,
	],
	controllers: [],
	providers: [DateScalar],
})
export class AppModule {}
