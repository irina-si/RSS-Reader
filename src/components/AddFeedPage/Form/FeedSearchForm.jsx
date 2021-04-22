import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

var pattern = new RegExp(
	"^(https?:\\/\\/)?" + // protocol
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
		"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
		"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
		"(\\#[-a-z\\d_]*)?$",
	"i"
); // fragment locator

const feedSearchFormValidate = (values) => {
	const errors = {};

	if (!values.feedURL) {
		errors.feedURL = "Required";
	} else if (!pattern.test(values.feedURL)) {
		errors.feedURL = "Invalid URL";
	}

	return errors;
};

const FeedSearchForm = (props) => {
	const formik = useFormik({
		initialValues: {
			feedURL: "",
		},
		onSubmit: (values, { setSubmitting }) => {
			props.makeFetch(values.feedURL);
			values.feedURL = "";
			setSubmitting(false);
		},
		validate: feedSearchFormValidate,
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id='feedURL'
					name='feedURL'
					label='Enter an URL'
					value={formik.values.feedURL}
					onChange={formik.handleChange}
					error={formik.touched.feedURL && Boolean(formik.errors.feedURL)}
					helperText={formik.touched.feedURL && formik.errors.feedURL}
				/>
				<Button
					color='primary'
					variant='contained'
					fullWidth
					type='submit'
					disabled={formik.isSubmitting}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default FeedSearchForm;
