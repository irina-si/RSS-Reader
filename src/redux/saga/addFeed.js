import { call, put, takeEvery } from "redux-saga/effects";

import { setCategories, setTotalCategoriesCount } from "../actions/addFeed";
import rssResponseParser from "../../helpers/parsers/rss-response-parser";
import getFeedAPI from "./../../api";
import { FEED_FETCH_REQUESTED } from "../actions/types";

function* fetchFeed(action) {
	try {
		const xmlText = yield call(getFeedAPI, action.url);
		const feedObj = yield rssResponseParser(xmlText);
		const { feedName, feedLink, feedCategories, feedImage } = feedObj;
		yield put(setCategories(feedName, feedLink, feedCategories, feedImage));
		yield put(setTotalCategoriesCount(feedCategories.length));
	} catch (e) {
		console.log(e);
	}
}

function* addFeedSaga() {
	yield takeEvery(FEED_FETCH_REQUESTED, fetchFeed);
}

export default addFeedSaga;
