import { call, put, takeEvery } from "redux-saga/effects";


import { setCategories, 
         setTotalCategoriesCount, 
         setCurrentCategoriesPage, 
         setCurrentCategoriesArray 
        } from "../actions/addFeed";
import { addFeed } from '../actions/userFeed';

import rssResponseParser from "../../helpers/parsers/rss-response-parser";
import getFeedAPI from './../../api'
import { FEED_FETCH_REQUESTED, CATEGORY_PAGE_CHANGED, ADD_FEED_TO_USER_LIST} from "../actions/types";

function* fetchFeed(action) {
  try {
    const xmlText = yield call(getFeedAPI, action.url);
    const feedObj = yield rssResponseParser(xmlText);
    yield put(setCategories(feedObj.feedTitle, feedObj.feedLink, feedObj.feedCategories));
    yield put(setTotalCategoriesCount(feedObj.feedCategories.length));
  } catch (e) {
    console.log(e);
  }
}

function* setCategoryPage(action) {
  try {
    yield put(setCurrentCategoriesPage(action.pageNum));
    yield put(setCurrentCategoriesArray(action.pageNum))
  } catch (e) {
    console.log(e);
  }
}

function* addFeedToUserList(action) {
  try {
    yield put(addFeed(action.feedData));
  } catch (e) {
    console.log(e);
  }
}

function* addFeedSaga() {
  yield takeEvery(FEED_FETCH_REQUESTED, fetchFeed);
  yield takeEvery(CATEGORY_PAGE_CHANGED, setCategoryPage);
  yield takeEvery(ADD_FEED_TO_USER_LIST, addFeedToUserList);
}

export default addFeedSaga;
