import { combineReducers } from "redux";

import addFeedPage from "./addFeedPage";
import userFeed from "./userFeed";

export default combineReducers({
	userFeed,
	addFeedPage,
});
