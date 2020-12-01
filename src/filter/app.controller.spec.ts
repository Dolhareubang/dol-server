import {Test, TestingModule} from "@nestjs/testing";
import FilterController from "./filter.constroller";
import FilterService from "./filter.service";

describe("FilterController", () => {
	let filterController: FilterController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [FilterController],
			providers: [FilterService],
		}).compile();

		filterController = app.get<FilterController>(FilterController);
	});

	describe("root", () => {
		it('should return "get Filter"', () => {
			expect(filterController.getFilter()).toBe("get Filter");
		});
	});
});
