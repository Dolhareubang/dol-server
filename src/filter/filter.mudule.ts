import {Module} from "@nestjs/common";
import FilterController from "./filter.constroller";
import FilterService from "./filter.service";

@Module({
	controllers: [FilterController],
	providers: [FilterService],
})
class FilterModule {
}
export default FilterModule;
