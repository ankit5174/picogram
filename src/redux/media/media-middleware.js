import {actionTypes} from "./media-action";
import {getMedia} from "./media-service";

export default store => next => action => {
    switch (action.type) {
        case actionTypes.GET_MEDIA:
            getMedia(store, store.getState().authReducer.accessToken);
            break;
        default:
            next(action);
    }
}