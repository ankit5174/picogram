export const actionTypes = {
    SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN'
};

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        token: token
    }
};