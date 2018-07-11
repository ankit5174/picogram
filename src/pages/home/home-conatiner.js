import {connect} from 'react-redux';
import HomePage from './home-page';
import {getMedia} from "../../redux/media/media-action";


function mapStateToProps(state) {
    return {
        images: state.mediaReducer.images
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        getMedia: () => {dispatch(getMedia())}
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);
