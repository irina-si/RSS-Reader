import { call, put, takeEvery } from "redux-saga/effects";


import { setCategories, 
         setTotalCategoriesCount, 
         setCurrentCategoriesPage, 
        } from "../actions/addFeed";

import rssResponseParser from "../../helpers/parsers/rss-response-parser";
import getFeedAPI from './../../api'
import { FEED_FETCH_REQUESTED, CATEGORY_PAGE_CHANGED } from "../actions/types";

function* fetchFeed(action) {
  try {
    const xmlText = yield call(getFeedAPI, action.url);
    const feedObj = yield rssResponseParser(xmlText);
    yield put(setCategories(feedObj.feedTitle, feedObj.feedLink, feedObj.feedCategories, feedObj.feedImage));
    yield put(setTotalCategoriesCount(feedObj.feedCategories.length));
  } catch (e) {
    console.log(e);
  }
}

function* setCategoryPage(action) {
  try {
    yield put(setCurrentCategoriesPage(action.pageNum));
  } catch (e) {
    console.log(e);
  }
}

function* addFeedSaga() {
  yield takeEvery(FEED_FETCH_REQUESTED, fetchFeed);
  yield takeEvery(CATEGORY_PAGE_CHANGED, setCategoryPage);
}

export default addFeedSaga;
