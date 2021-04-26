import React from "react";
import MyFeeds from "../../components/InitialPage/MyFeeds/MyFeeds";
import UserFeedsListContainer from "../../components/InitialPage/UserFeedsList";
import FoldersListContainer from "./../../components/InitialPage/FoldersList";

const InitialPage = () => (
	<>
		<h1>My Folders</h1>
		<div>
			<FoldersListContainer />
		</div>
		<div>
			<MyFeeds />
			<UserFeedsListContainer />
		</div>
	</>
);

export default InitialPage;
