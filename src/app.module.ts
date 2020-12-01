import {Module} from "@nestjs/common";
import FilterModule from "./filter/filter.mudule";

@Module({
	imports: [FilterModule],
})

class AppModule {}
export default AppModule;
