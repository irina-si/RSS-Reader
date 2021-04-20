const FEED_FETCH_REQUESTED = 'FEED_FETCH_REQUESTED';
const SET_CATEGORIES = 'SET_CATEGORIES';

let initialState = {
    feedId: 0,
    feedName: '',
    categories: ['politics', 'nature'],
}

const addFeedPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                feedId: 0,
                feedName: '',
                categories: [...action.data],
              };
        default: return state;
        } 
}

export default addFeedPageReducer;

export const feedFetchRequestedActionCreator = (feedURL) => {
    return {
        type: FEED_FETCH_REQUESTED,
        feedURL
    };
}

export const setCategoriesActionCreator = (data) => {
    return {
        type: SET_CATEGORIES,
        data
    }
}