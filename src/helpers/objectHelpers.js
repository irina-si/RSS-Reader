export const paginate = (array, pageSize, pageNumber) => {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const updateObjectInArray = (
	feeds,
	feedId,
	objPropName,
	newObjProps
) => {
	return feeds.map((f) => {
		if (f[objPropName] === feedId) {
			return { ...f, ...newObjProps };
		}
		return f;
	});
};

export const deleteObjectInArray = (feeds, feedId, objPropName) =>
	feeds.filter((f) => f[objPropName] !== feedId);
