import { SET_CATEGORIES, FEED_FETCH_REQUESTED } from "../actions/types";

let initialState = {
  feedId: 0,
  feedName: "",
  categories: ["politics", "nature"],
};

const addFeedPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        feedId: 0,
        feedName: "",
        categories: [...action.data],
      };
    default:
      return state;
  }
};

export default addFeedPageReducer;
