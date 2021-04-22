import {
	SET_CATEGORIES,
	SET_PAGE,
	SET_TOTAL_CATEGORIES_COUNT,
	CLEAR_CATEGORIES,
} from "../actions/types";

let initialState = {
	feedId: 0,
	feedName: "",
	feedImage: "",
	feedLink: "",
	categories: [],
	currentCategories: [],
	totalCategories: 0,
	pageSize: 10,
	currentPage: 1,
};

const addFeedPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORIES:
			return {
				...state,
				feedName: action.title,
				feedLink: action.link,
				categories: [...action.categories],
				feedImage: action.image,
			};
		case SET_PAGE:
			return {
				...state,
				currentPage: action.pageNum,
			};
		case SET_TOTAL_CATEGORIES_COUNT:
			return {
				...state,
				totalCategories: action.count,
			};
		case CLEAR_CATEGORIES:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export default addFeedPageReducer;
