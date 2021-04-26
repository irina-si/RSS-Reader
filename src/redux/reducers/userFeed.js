import {
	updateObjectInArray,
	deleteObjectInArray,
} from "../../helpers/objectHelpers";
import {
	ADD_FEED_TO_USER_LIST,
	DELETE_FEED_FROM_USER_LIST,
	UPDATE_FEED_LINK,
} from "./../actions/types";

let initialState = {
	feeds: [],
};

const userFeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FEED_TO_USER_LIST:
			return {
				feeds: [
					...state.feeds,
					{
						feedId: action.feedId,
						feedName: action.feedName,
						feedLink: action.feedLink,
						categories: [...action.categories],
						feedImage: action.feedImage,
					},
				],
			};
		case UPDATE_FEED_LINK:
			return {
				...state,
				feeds: updateObjectInArray(state.feeds, action.feedId, "feedId", {
					feedLink: action.feedLink,
				}),
			};
		case DELETE_FEED_FROM_USER_LIST:
			return {
				...state,
				feeds: deleteObjectInArray(state.feeds, action.feedId, "feedId"),
			};
		default:
			return state;
	}
};

export default userFeedReducer;
