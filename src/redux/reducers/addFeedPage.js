import { SET_CATEGORIES, 
        SET_PAGE, 
        SET_TOTAL_CATEGORIES_COUNT,
        SET_CURRENT_CATEGORIES_ARRAY,
        SET_CURRENT_CATEGORIES_PAGE
      } from "../actions/types";

import paginator from './../../helpers/categoriesPaginator';

let initialState = {
  feedId: 0,
  feedName: "",
  feedLink: "",
  categories: [],
  currentCategories: [],
  totalCategories: 0,
  pageSize: 10,
  currentPage: 1,
  searchTitle: '',
};

const addFeedPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        feedName: action.title,
        feedLink: action.link,
        categories: [...action.categories],
      };
    case SET_PAGE:
      return {
       ...state,
       currentPage: action.pageNum,
      };
    case SET_TOTAL_CATEGORIES_COUNT:
      return {
        ...state,
        totalCategories: action.count
      };
    case SET_CURRENT_CATEGORIES_ARRAY:
      const currentCategoriesArray = paginator(state.categories, state.pageSize, action.pageNum);
      return {
        ...state,
        currentCategories: currentCategoriesArray
      };
    case SET_CURRENT_CATEGORIES_PAGE:
      return {
        ...state,
        currentPage: action.pageNum,
      };
    default:
      return state;
  }
};

export default addFeedPageReducer;
