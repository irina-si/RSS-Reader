import React from 'react';
import AddFeedPage from './AddFeedPage';
import {connect} from 'react-redux';
import { changeCategoryPage, clearCategories } from './../../redux/actions/addFeed';
import { addFeedToUserList } from './../../redux/actions/userFeed';
import { selectCurrentCategories } from './../../redux/selectors';

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
    feedImage: state.addFeedPage.feedImage,
    categories: state.addFeedPage.categories,
    currentCategories: selectCurrentCategories(state),
    totalCategoriesCount: state.addFeedPage.totalCategories,
    pageSize: state.addFeedPage.pageSize,
    currentPage: state.addFeedPage.currentPage,
  };
}

const mapDispatchToProps =  {
    changeCategoryPage,
    addFeedToUserList,
    clearCategories
}


export default connect(mapStateToProps, mapDispatchToProps)(AddFeedPageContainer);