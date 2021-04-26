import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const DeleteFeedModal = (props) => {
	const { open, handleClose, folderName, folderId, deleteFolder } = props;

	const handleOnClickAgree = () => {
		deleteFolder(folderId);
		handleClose();
	};

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-labelledby='alert-dialog-slide-title'
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle id='alert-dialog-slide-title'>
				{`Do you want to delete "${folderName}" folder?`}
			</DialogTitle>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Disagree
				</Button>
				<Button onClick={handleOnClickAgree} color='primary' type='submit'>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteFeedModal;
