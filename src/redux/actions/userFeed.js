import {
	ADD_FEED_TO_USER_LIST,
	DELETE_FEED_FROM_USER_LIST,
	UPDATE_FEED_LINK,
} from "./types";

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

export const deleteFeedFromUserList = (feedId) => ({
	type: DELETE_FEED_FROM_USER_LIST,
	feedId,
});

export const updateFeedLink = (feedId, feedLink) => ({
	type: UPDATE_FEED_LINK,
	feedId,
	feedLink,
});
