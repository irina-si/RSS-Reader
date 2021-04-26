import React from "react";

import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import CreateFolderModal from "./../modalWindows/CreateFolderModal";

const AddButton = (props) => {
	const { createFolder } = props;

	const [openCreateFolder, setCreateFolderOpen] = React.useState(false);

	const handleCreateFolderOpen = () => {
		setCreateFolderOpen(true);
	};

	const handleCreateFolderClose = () => {
		setCreateFolderOpen(false);
	};

	return (
		<>
			<IconButton color='primary' onClick={handleCreateFolderOpen}>
				<AddCircleOutlineIcon />
			</IconButton>
			<CreateFolderModal
				open={openCreateFolder}
				handleClose={handleCreateFolderClose}
				createFolder={createFolder}
			/>
		</>
	);
};

export default AddButton;
