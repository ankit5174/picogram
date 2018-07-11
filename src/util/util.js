export const util = {
    getTokenFromHash: (hash) => {
        return hash.substr(hash.indexOf('=')+1);
    }
};