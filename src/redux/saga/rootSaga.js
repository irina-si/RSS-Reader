import { all } from "redux-saga/effects";

import addFeedSaga from "./addFeed";

export default function* rootSaga() {
	yield all([addFeedSaga()]);
}
