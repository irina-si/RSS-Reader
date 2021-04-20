const ADD_FEED = 'ADD_FEED';

let initialState = {
    feeds: [
        {
            feedId: 0,
            feedName: '',
            categories: [],
        }
    ]
}

const userFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEED:
            return {
                feeds: [
                    ...state.feeds,
                    {
                        feedId: 1,
                        feedName: action.name,
                        categories: [],
                    }
                ]
            }
        default: return state;
        } 
}

export default userFeedReducer

export const addFeedActionCreator = () => {
    return {
        type: ADD_FEED,
    }
}