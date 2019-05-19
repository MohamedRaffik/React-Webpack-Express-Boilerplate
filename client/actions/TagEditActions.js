export const UPDATE_TAG = 'UPDATE_TAG';
export const TAGS = {
    TITLE: 'title',
    ARTIST: 'artist',
    ALBUM: 'album',
    GROUPING: 'grouping',
    ARTWORK: 'artwork'
}

export const updateTag = (tag, data) => {
    return {
        type: UPDATE_TAG,
        tag,
        data
    }
}