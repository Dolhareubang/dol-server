import {Controller, Get, HttpCode} from "@nestjs/common";
import FilterService from "./filter.service";

@Controller("api/filter")
class FilterController {
  filterService: FilterService;

  constructor(filterService: FilterService) {
  	this.filterService = filterService;
  }

  @Get("/")
  @HttpCode(200)
  getFilter(): string {
  	return this.filterService.getFilter();
  }
}

export default FilterController;
