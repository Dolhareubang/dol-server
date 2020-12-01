import {NestFactory} from "@nestjs/core";
import FilterModule from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(FilterModule);

	await app.listen(3000);
}
bootstrap();
