let lastId = 0;

const generateNewId = (prefix = "id") => {
	lastId++;
	return `${prefix}${lastId}`;
};

export default generateNewId;
