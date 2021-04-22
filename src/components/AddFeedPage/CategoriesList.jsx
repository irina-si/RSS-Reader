import React, { useState } from "react";
import {
	Button,
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import "./CategoriesList.scss";

export default function CategoriesList(props) {
	const {
		changeCategoryPage,
		feedId,
		feedLink,
		feedName,
		feedImage,
		addFeedToUserList,
		clearCategories,
		totalCategoriesCount,
		pageSize,
		currentPage,
	} = props;

	const [checked, setChecked] = useState([]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const onPageChange = (num) => {
		changeCategoryPage(num);
	};
	const onAddFeed = () => {
		const currentFeedObj = {
			feedId,
			feedName,
			feedLink,
			categories: [...checked],
			feedImage,
		};
		props.addFeedToUserList(currentFeedObj);
		props.clearCategories();
	};

	const pagesCount = Math.ceil(props.totalCategoriesCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className='selectPageMenu'>
				{pages.map((num) => {
					return (
						<span
							className={props.currentPage === num ? "selectedPage" : ""}
							onClick={() => onPageChange(num)}
						>
							{num}
						</span>
					);
				})}
			</div>
			<List>
				{props.currentCategories.map((value) => {
					const labelId = `checkbox-list-label-${value}`;

					return (
						<ListItem
							key={value}
							role={undefined}
							dense
							button
							onClick={handleToggle(value)}
						>
							<ListItemIcon>
								<Checkbox
									edge='start'
									checked={checked.indexOf(value) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ "aria-labelledby": labelId }}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={value} />
							<ListItemSecondaryAction>
								<IconButton edge='end' aria-label='comments'></IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
			<Button variant='contained' onClick={onAddFeed}>
				Add Feed
			</Button>
		</div>
	);
}
