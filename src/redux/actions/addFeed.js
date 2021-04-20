import { SET_CATEGORIES, FEED_FETCH_REQUESTED } from "./types";

export const loadFeedRequest = (feedURL) => {
  return {
    type: FEED_FETCH_REQUESTED,
    feedURL,
  };
};

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    data,
  };
};
