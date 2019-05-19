export const CHANGE_YT_URL = 'CHANGE_YT_URL';

export const changeURL = (url) => {
    return {
        type: CHANGE_YT_URL,
        url
    }
}