const getFeedCategories = (feedItems) => {
	let categories = new Set();
	feedItems.forEach((el) => {
		const listOfCategories = el.querySelectorAll("category");
		for (let category of listOfCategories) {
			categories.add(category.innerHTML);
		}
	});
	return Array.from(categories);
};

const rssResponseParser = async (str) => {
	const data = new window.DOMParser().parseFromString(str, "text/xml");
	const feedItems = data.querySelectorAll("item");
	const feedName = data.querySelector("channel title").innerHTML;
	const feedLink = data.querySelector("channel link").innerHTML;
	const feedImage = data.querySelector("image url").innerHTML;
	const feedCategories = getFeedCategories(feedItems);
	return {
		feedName,
		feedLink,
		feedCategories,
		feedImage,
	};
};

export default rssResponseParser;
