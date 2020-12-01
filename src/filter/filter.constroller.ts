import {Controller, Get, HttpCode} from "@nestjs/common";
import FilterService from "./filter.service";

@Controller("api/filter")
export default class FilterController {
	// eslint-disable-next-line no-useless-constructor
	constructor(private readonly filterService: FilterService) {}

  @Get("/")
  @HttpCode(200)
	getFilter(): string {
		return this.filterService.getFilter();
	}
}
