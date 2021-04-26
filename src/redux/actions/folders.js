import { ADD_FOLDER, DELETE_FOLDER, EDIT_FOLDER_NAME } from "./types";

export const createFolder = (folderName) => ({
	type: ADD_FOLDER,
	folderName,
});

export const deleteFolder = (folderId) => ({
	type: DELETE_FOLDER,
	folderId,
});
