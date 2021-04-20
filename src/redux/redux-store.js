import userFeedReducer from "./reducers/UserFeedReducer";
import addFeedPageReducer from "./reducers/CurrentAddFeedReducer";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  userFeed: userFeedReducer,
  addFeedPage: addFeedPageReducer,
});

let store = createStore(reducers, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySaga);
export default store;