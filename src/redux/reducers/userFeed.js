const ADD_FEED = 'ADD_FEED';

let initialState = {
    feeds: [
        
    ]
}

const userFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEED:
            return {
                feeds: [
                    ...state.feeds,
                    {
                        feedId: action.feedId,
                        feedName: action.feedTitle,
                        feedLink: action.feedLink, 
                        categories: [...action.categories],
                    }
                ]
            }
        default: return state;
        } 
}

export default userFeedReducer

