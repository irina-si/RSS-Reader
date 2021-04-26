import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CategoriesList from "../../components/AddFeedPage/CategoriesList";
import FeedSearchForm from "../../components/AddFeedPage/Form";

const AddFeedPage = (props) => (
	<div>
		<Button color='primary' component={Link} to='/'>
			To Home Page
		</Button>
		<FeedSearchForm />
		{props.currentCategories && <CategoriesList {...props} />}
	</div>
);

export default AddFeedPage;
