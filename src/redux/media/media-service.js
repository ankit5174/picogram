import {getMediaSuccess} from "./media-action";
import axios from 'axios';
import {constants} from "../../util/constants";

export const getMedia = (store, token) => {
    axios.get(constants.mediaURL(token))
        .then((response)=>{
            let images = response.data.data.map((item)=>{
                if(item.type === 'image') {
                    let photo = {
                        src:item.images.low_resolution.url,
                        height:4,
                        width:4
                    };
                    return photo;
                }
            });
            return store.dispatch(getMediaSuccess(images))
        })
        .catch((error)=>{
            console.log(error)
        })
};

