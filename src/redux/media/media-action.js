export const actionTypes = {
    GET_MEDIA: 'GET_MEDIA',
    GET_MEDIA_SUCCESS: 'GET_MEDIA_SUCCESS',
    GET_MEDIA_FAILED:  'GET_MEDIA_FAILED'
};

export const getMedia = () => {
    return {
        type: actionTypes.GET_MEDIA,
    }
};

export const getMediaSuccess = (images) => {
    return {
        type: actionTypes.GET_MEDIA_SUCCESS,
        images: images
    }
};
