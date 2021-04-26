import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import DeleteFeedModal from "../modalWindows/DeleteFeedModal";
import EditFeedModal from "../modalWindows/EditFeedModal";

import "./UserFeedsList.scss";

export default function UserFeedsList(props) {
	const { feeds, deleteFeedFromUserList, updateFeedLink } = props;
	return (
		<div className='root'>
			{!feeds.length ? (
				<div>Your feeds will be here</div>
			) : (
				<List>
					{feeds.map((feed) => {
						return (
							<FeedsListItem
								feed={feed}
								deleteFeed={deleteFeedFromUserList}
								updateLink={updateFeedLink}
							/>
						);
					})}
				</List>
			)}
		</div>
	);
}

const FeedsListItem = (props) => {
	const { feed, deleteFeed, updateLink } = props;

	const [openEdit, setEditOpen] = React.useState(false);
	const [openDelete, setDeleteOpen] = React.useState(false);

	const handleEditOpen = () => {
		setEditOpen(true);
	};

	const handleEditClose = () => {
		setEditOpen(false);
	};

	const handleDeleteOpen = () => {
		setDeleteOpen(true);
	};

	const handleDeleteClose = () => {
		setDeleteOpen(false);
	};

	return (
		<ListItem component={Link} to={`/feed/${feed.feedId}`}>
			<ListItemAvatar>
				<Avatar alt={feed.feedName} src={feed.feedImage}>
					<FolderIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={feed.feedName} secondary={feed.feedLink} />
			<ListItemSecondaryAction>
				<IconButton edge='end' aria-label='edit' onClick={handleEditOpen}>
					<EditRoundedIcon />
				</IconButton>
				<EditFeedModal
					open={openEdit}
					handleClose={handleEditClose}
					feedName={feed.feedName}
					feedId={feed.feedId}
					updateLink={updateLink}
				/>
				<IconButton edge='end' aria-label='delete' onClick={handleDeleteOpen}>
					<DeleteIcon />
				</IconButton>
				<DeleteFeedModal
					open={openDelete}
					handleClose={handleDeleteClose}
					feedName={feed.feedName}
					feedId={feed.feedId}
					deleteFeed={deleteFeed}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};
