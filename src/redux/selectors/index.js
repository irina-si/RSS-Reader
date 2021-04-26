import { createSelector } from "reselect";
import { paginate } from "./../../helpers/objectHelpers";

export const selectAllCategories = (state) => state.addFeedPage.categories;
export const selectCurrenPageNum = (state) => state.addFeedPage.currentPage;
export const selectPageSize = (state) => state.addFeedPage.pageSize;
export const selectCurrentCategories = createSelector(
	selectAllCategories,
	selectCurrenPageNum,
	selectPageSize,
	(allCategories, pageNum, selectPageSize) =>
		paginate(allCategories, selectPageSize, pageNum)
);
