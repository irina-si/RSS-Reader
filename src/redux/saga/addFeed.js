import { call, put, takeEvery } from "redux-saga/effects";

import { FEED_FETCH_REQUESTED, SET_CATEGORIES } from "../actions/types";
import { setCategories } from "../actions/addFeed";

const getFeed = async (url) => {
  const res = await fetch(url);
  return res.text();
};

function* fetchFeed(action) {
  try {
    const xmlText = yield call(getFeed, action.feedURL);

    yield put(setCategories([]));
  } catch (e) {
    console.log(e);
  }
}

function* addFeedSaga() {
  yield takeEvery(FEED_FETCH_REQUESTED, fetchFeed);
}

export default addFeedSaga;
