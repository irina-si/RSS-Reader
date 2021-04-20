import { call, put, takeEvery } from 'redux-saga/effects';

function getFeed(url) {
    return fetch(url).then(response => response.text())
    .then(text => console.log(text));;
}

function* fetchFeed(action) {
   try {
      const response = yield call(getFeed, action.feedURL);
      yield put({type: "SET_CATEGORIES", payload: response.data});
   } catch (e) {
      console.log(e);
   }
}

function* mySaga() {
  yield takeEvery("FEED_FETCH_REQUESTED", fetchFeed);
}

export default mySaga;