import React from 'react';
import { connect } from 'react-redux';
import { feedFetchRequestedActionCreator } from '../../../redux/reducers/CurrentAddFeedReducer';
import FeedSearchForm from './FeedSearchForm';

function FeedSearchFormContainer(props) {
  const makeFetch = (url) => props.dispatch(feedFetchRequestedActionCreator(url));
  return (
    <FeedSearchForm makeFetch={makeFetch} />
  )
}

export default connect()(FeedSearchFormContainer);