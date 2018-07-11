import {actionTypes} from "./media-action";

const DEFAULT = {
    images: []
};

const updateImages = (state, images) => {
    return {
        ...state,
        images:images
    }
};


export default (state = DEFAULT, action) => {
    switch (action.type) {
        case actionTypes.GET_MEDIA_SUCCESS:
            return updateImages(state, action.images);
        default:
            return state;
    }
}