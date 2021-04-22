const getFeed = async (url) => {
	const res = await fetch(url);
	return res.text();
};

export default getFeed;
