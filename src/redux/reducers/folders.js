import {
	updateObjectInArray,
	deleteObjectInArray,
} from "../../helpers/objectHelpers";

import generateNewId from "./../../helpers/newid";

import {
	ADD_FOLDER,
	DELETE_FOLDER,
	EDIT_FOLDER_NAME,
} from "./../actions/types";

let initialState = {
	folders: [],
};

const folders = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FOLDER:
			return {
				...state,
				folders: [
					...state.folders,
					{
						folderId: generateNewId(),
						folderName: action.folderName,
						feeds: [],
					},
				],
			};
		case DELETE_FOLDER:
			return {
				...state,
				folders: deleteObjectInArray(
					state.folders,
					action.folderId,
					"folderId"
				),
			};
		case EDIT_FOLDER_NAME:
			return {};
		default:
			return state;
	}
};

export default folders;
