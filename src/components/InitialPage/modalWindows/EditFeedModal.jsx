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

var pattern = new RegExp(
	"^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$",
	"i"
);

const feedSearchFormValidate = (values) => {
	const errors = {};
	if (!values.feedLink) {
		errors.feedLink = "Required";
	} else if (!pattern.test(values.feedLink)) {
		errors.feedLink = "Invalid URL";
	}
	return errors;
};

const EditFeedModal = (props) => {
	const { open, handleClose, feedName, feedId, updateLink } = props;

	const formik = useFormik({
		initialValues: {
			feedLink: "",
		},
		onSubmit: (values) => {
			updateLink(feedId, values.feedLink);
			values.feedLink = "";
			handleClose();
		},
		validate: feedSearchFormValidate,
	});

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			onClose={handleClose}
			aria-labelledby='form-dialog-title'
		>
			<DialogTitle id='form-dialog-title'>Edit a feed URL</DialogTitle>

			<DialogContent>
				<DialogContentText>
					Enter a new URL for "{feedName}" feed.
				</DialogContentText>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						autoFocus
						margin='dense'
						id='feedLink'
						name='feedLink'
						label='Feed URL'
						type='text'
						value={formik.values.feedLink}
						onChange={formik.handleChange}
						error={formik.touched.feedLink && Boolean(formik.errors.feedLink)}
						helperText={formik.touched.feedLink && formik.errors.feedLink}
						fullWidth
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Cancel
				</Button>
				<Button color='primary' type='submit' onClick={formik.handleSubmit}>
					Change
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default EditFeedModal;
