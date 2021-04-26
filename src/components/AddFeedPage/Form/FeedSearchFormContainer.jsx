import React from "react";
import { connect } from "react-redux";
import { loadFeedRequest } from "../../../redux/actions/addFeed";
import FeedSearchForm from "./FeedSearchForm";

const FeedSearchFormContainer = ({ makeFetch }) => (
	<FeedSearchForm makeFetch={makeFetch} />
);

const mapDispatchToProps = {
	makeFetch: loadFeedRequest,
};

export default connect(null, mapDispatchToProps)(FeedSearchFormContainer);
