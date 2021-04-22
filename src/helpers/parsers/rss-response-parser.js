const getFeedCategories = (feedItems) => {
  let categories = new Set();
  feedItems.forEach(el => {
      const listOfCategories = el.querySelectorAll('category');
      for (let category of listOfCategories) {
        categories.add(category.innerHTML);
      }
  });
  return Array.from(categories);
}

const rssResponseParser = async (str) => {
  const data = new window.DOMParser().parseFromString(str, "text/xml");
  console.log(data);
  const feedItems = data.querySelectorAll("item");
  const feedTitle = data.querySelector("channel title").innerHTML;
  const feedLink = data.querySelector("channel link").innerHTML;
  // достать картинку
  const feedCategories = getFeedCategories(feedItems);
  return {
    feedTitle,
    feedLink,
    feedCategories
  }
}

export default rssResponseParser;