import { ADD_FEED, ADD_FEED_TO_USER_LIST } from "./types"


export const addFeed = ({feedId, feedTitle, feedLink, categories}) => ({type: ADD_FEED, feedId, feedTitle, feedLink, categories});
export const addFeedToUserList = (feedData) => ({type: ADD_FEED_TO_USER_LIST, feedData});