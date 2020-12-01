import {Injectable} from "@nestjs/common";

@Injectable()
class FilterService {
	getFilter = () => "get Filter";
}

export default FilterService;
