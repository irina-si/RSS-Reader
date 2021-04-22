import { createSelector } from 'reselect';
import paginator from './../../helpers/categoriesPaginator';

export const selectAllCategories = (state) => state.addFeedPage.categories;
export const selectCurrenPageNum = (state) => state.addFeedPage.currentPage;
export const selectPageSize = (state) => state.addFeedPage.pageSize;
export const selectCurrentCategories = createSelector(selectAllCategories, selectCurrenPageNum, selectPageSize,
                                (allCategories, pageNum, selectPageSize) => paginator(allCategories, selectPageSize, pageNum));