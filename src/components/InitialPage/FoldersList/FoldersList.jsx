import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FolderCard from "./FolderCard";

const FolderList = (props) => {
	const { folders, deleteFolder } = props;
	return (
		<div>
			{!folders.length ? (
				<div>No folders yet</div>
			) : (
				<List className='folderList'>
					{folders.map((f) => {
						return (
							<ListItem>
								<FolderCard folder={f} deleteFolder={deleteFolder} />
							</ListItem>
						);
					})}
				</List>
			)}
		</div>
	);
};

export default FolderList;
