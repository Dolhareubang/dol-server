import {Module} from "@nestjs/common";
import FilterModule from "./filter/filter.mudule";

@Module({
	imports: [FilterModule],
})
export default class AppModule {}
