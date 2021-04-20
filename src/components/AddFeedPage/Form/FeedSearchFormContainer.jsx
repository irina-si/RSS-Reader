import React from 'react';
import { connect } from 'react-redux';
import { loadFeedRequest } from '../../../redux/actions/addFeed';
import FeedSearchForm from './FeedSearchForm';

const FeedSearchFormContainer = ({fetchData}) => {
  const makeFetch = (url) => {
    fetchData(url);
  }

  return (
    <FeedSearchForm makeFetch={makeFetch} />
  )
}

const mapDispatchToProps = {
  fetchData: loadFeedRequest
}



export default connect(null, mapDispatchToProps)(FeedSearchFormContainer);