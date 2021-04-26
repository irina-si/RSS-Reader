import React from "react";
import { connect } from "react-redux";

import FoldersList from "./FoldersList";
import AddFolderButton from "./AddFolderButton";

import { createFolder, deleteFolder } from "./../../../redux/actions/folders";

import "./FolderList.scss";

const FoldersListContainer = (props) => {
	return (
		<div className='folderList-container'>
			<AddFolderButton createFolder={props.createFolder} />
			<FoldersList {...props} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	folders: state.folders.folders,
});

const mapDispatchToProps = {
	createFolder,
	deleteFolder,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoldersListContainer);
