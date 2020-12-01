import {Injectable} from "@nestjs/common";

@Injectable()
export default class FilterService {
	// eslint-disable-next-line class-methods-use-this
	getFilter() {
		return "get Filter";
	}
}
