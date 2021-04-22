import {
	SET_CATEGORIES,
	FEED_FETCH_REQUESTED,
	SET_PAGE,
	SET_TOTAL_CATEGORIES_COUNT,
	CLEAR_CATEGORIES,
} from "./types";

export const loadFeedRequest = (url) => ({ type: FEED_FETCH_REQUESTED, url });
export const setCategories = (title, link, categories, image) => ({
	type: SET_CATEGORIES,
	title,
	link,
	categories,
	image,
});
export const setPage = (pageNum) => ({ type: SET_PAGE, pageNum });
export const setTotalCategoriesCount = (count) => ({
	type: SET_TOTAL_CATEGORIES_COUNT,
	count,
});
export const clearCategories = () => ({ type: CLEAR_CATEGORIES });
