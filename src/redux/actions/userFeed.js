import { ADD_FEED_TO_USER_LIST } from "./types";

export const addFeedToUserList = ({
	feedId,
	feedName,
	feedLink,
	categories,
	feedImage,
}) => ({
	type: ADD_FEED_TO_USER_LIST,
	feedId,
	feedName,
	feedLink,
	categories,
	feedImage,
});
