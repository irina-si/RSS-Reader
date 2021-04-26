import React from "react";
import { useFormik } from "formik";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const CreateFolderModal = (props) => {
	const { open, handleClose, createFolder } = props;

	const formik = useFormik({
		initialValues: {
			folderName: "",
		},
		onSubmit: (values) => {
			createFolder(values.folderName);
			values.folderName = "";
			handleClose();
		},
	});

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			onClose={handleClose}
			aria-labelledby='form-dialog-title'
		>
			<DialogTitle id='form-dialog-title'>Create a folder</DialogTitle>

			<DialogContent>
				<DialogContentText>Enter a folder name:</DialogContentText>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						autoFocus
						margin='dense'
						id='folderName'
						name='folderName'
						label='Folder name'
						type='text'
						value={formik.values.folderName}
						onChange={formik.handleChange}
						fullWidth
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Cancel
				</Button>
				<Button color='primary' type='submit' onClick={formik.handleSubmit}>
					Create
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateFolderModal;
