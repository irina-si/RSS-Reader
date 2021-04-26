import React from "react";
import { connect } from "react-redux";
import UserFeedsList from "./UserFeedsList";
import {
	deleteFeedFromUserList,
	updateFeedLink,
} from "./../../../redux/actions/userFeed";

const UserFeedsListContainer = (props) => <UserFeedsList {...props} />;

const mapStateToProps = (state) => {
	return {
		feeds: state.userFeed.feeds,
	};
};

const mapDispatchToProps = {
	deleteFeedFromUserList,
	updateFeedLink,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserFeedsListContainer);
