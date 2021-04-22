import {ADD_FEED_TO_USER_LIST} from './../actions/types'

let initialState = {
    feeds: [
        
    ]
}

const userFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEED_TO_USER_LIST:
            console.log(action);
            return {
                feeds: [
                    ...state.feeds,
                    {
                        feedId: action.feedId,
                        feedName: action.feedTitle,
                        feedLink: action.feedLink, 
                        categories: [...action.categories],
                        feedImage: action.feedImage,
                    }
                ]
            }
        default: return state;
        } 
}

export default userFeedReducer

