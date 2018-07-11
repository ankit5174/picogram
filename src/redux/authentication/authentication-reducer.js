import {actionTypes} from "./authentication-action";
import {authenticationUtil} from '../../util/authentication-util';

const DEFAULT = {
    accessToken: '',
    authenticationUrl: 'https://www.instagram.com/oauth/authorize/?client_id=' + authenticationUtil.CLIENT_ID + '&redirect_uri=' + authenticationUtil.REDIRECT_URI + '&response_type=token'
};

const setAccessToken = (state, token) => {
    return {
        ...state,
        accessToken: token
    }
};

export default (state = DEFAULT, action) => {
    switch (action.type) {
        case actionTypes.SET_ACCESS_TOKEN:
            return setAccessToken(state, action.token);
        default:
            return state;
    }
}