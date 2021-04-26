import React from "react";
import "./AddButton.scss";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Link } from "react-router-dom";

const AddButton = () => (
	<IconButton color='primary' component={Link} to='/add-feed'>
		<AddCircleOutlineIcon />
	</IconButton>
);

export default AddButton;
