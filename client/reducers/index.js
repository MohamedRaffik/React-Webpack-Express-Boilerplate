import { UPDATE_TAG, CHANGE_YT_URL, TAGS } from '../actions';

const initalState = {
    youtube_url: '',
    tags: {
        title: '',
        artist: '',
        album: '',
        grouping: '',
        artwork: ''
    },
};

export default (state = initalState, action) => {
    let newState = { ...state };
    switch(action.type) {
        case UPDATE_TAG:
            newState.tags[action.type] = action.data;
            return newState;
        case CHANGE_YT_URL:
            newState.youtube_url = action.url;
            return newState;
        default:
            return newState;
    };
};