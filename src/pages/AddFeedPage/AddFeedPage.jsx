import React from 'react';
import CategoriesList from '../../components/AddFeedPage/CategoriesList';
import FeedSearchFormContainer from '../../components/AddFeedPage/Form/FeedSearchFormContainer';

const AddFeedPage = (props) => {
  return (
    <div>
      <FeedSearchFormContainer />
      {props.categories && <CategoriesList categories={props.categories}/>}
    </div>
  );
}

export default AddFeedPage;