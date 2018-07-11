import {connect} from 'react-redux';
import BasePage from "./base-page";

function mapStateToProps(state) {
    return {
        authenticationUrl: state.authReducer.authenticationUrl
    }
}

export default connect(mapStateToProps, null)(BasePage);
