import React from "react";
import CategoriesList from "../../components/AddFeedPage/CategoriesList";
import FeedSearchForm from "../../components/AddFeedPage/Form";

const AddFeedPage = (props) => (
	<div>
		<FeedSearchForm />
		{props.currentCategories && <CategoriesList {...props} />}
	</div>
);

export default AddFeedPage;
