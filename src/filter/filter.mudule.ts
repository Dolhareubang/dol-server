import {Module} from "@nestjs/common";
import FilterController from "./filter.constroller";
import FilterService from "./filter.service";

@Module({
	controllers: [FilterController],
	providers: [FilterService],
})
export default class FilterModule {}
