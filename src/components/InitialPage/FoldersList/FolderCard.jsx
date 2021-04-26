import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import DeleteFolderModal from "./../modalWindows/DeleteFolderModal";

const FolderCard = (props) => {
	const { folder, deleteFolder } = props;

	const [openDelete, setDeleteOpen] = React.useState(false);

	const handleDeleteOpen = () => {
		setDeleteOpen(true);
	};

	const handleDeleteClose = () => {
		setDeleteOpen(false);
	};

	return (
		<Card className='folder-card'>
			<CardActions className='card-action-buttons'>
				<IconButton edge='end' aria-label='edit' component={Link} to='/folders'>
					<EditRoundedIcon />
				</IconButton>
				<IconButton edge='end' aria-label='delete' onClick={handleDeleteOpen}>
					<DeleteIcon />
				</IconButton>
				<DeleteFolderModal
					open={openDelete}
					handleClose={handleDeleteClose}
					folderName={folder.folderName}
					folderId={folder.folderId}
					deleteFolder={deleteFolder}
				/>
			</CardActions>
			<CardActionArea>
				<CardContent className='card-content'>
					<Typography gutterBottom variant='h5' component='h2'>
						{folder.folderName}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default FolderCard;
