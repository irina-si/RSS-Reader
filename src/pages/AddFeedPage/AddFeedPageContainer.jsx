import React from 'react';
import AddFeedPage from './AddFeedPage';
import {connect} from 'react-redux';
import { changeCategoryPage } from './../../redux/actions/addFeed';
import { addFeedToUserList } from './../../redux/actions/userFeed';

const AddFeedPageContainer = (props) => {
  return (
    <AddFeedPage {...props}/>
  );
}

const mapStateToProps = state => {
  return {
    feedId: state.addFeedPage.feedId,
    feedName: state.addFeedPage.feedName,
    feedLink: state.addFeedPage.feedLink,
    categories: state.addFeedPage.categories,
    currentCategories: state.addFeedPage.currentCategories,
    totalCategoriesCount: state.addFeedPage.totalCategories,
    pageSize: state.addFeedPage.pageSize,
    currentPage: state.addFeedPage.currentPage,
  };
}

const mapDispatchToProps =  {
    changeCategoryPage,
    addFeedToUserList,
}


export default connect(mapStateToProps, mapDispatchToProps)(AddFeedPageContainer);