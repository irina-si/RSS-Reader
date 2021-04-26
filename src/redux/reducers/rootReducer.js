import { combineReducers } from "redux";

import addFeedPage from "./addFeedPage";
import userFeed from "./userFeed";
import folders from "./folders";

export default combineReducers({
	userFeed,
	addFeedPage,
	folders,
});
