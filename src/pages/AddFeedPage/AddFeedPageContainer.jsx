import React from 'react';
import AddFeedPage from './AddFeedPage';
import {connect} from 'react-redux';

const AddFeedPageContainer = (props) => {
  return (
    <AddFeedPage categories={props.categories}/>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.addFeedPage.categories
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(AddFeedPageContainer);