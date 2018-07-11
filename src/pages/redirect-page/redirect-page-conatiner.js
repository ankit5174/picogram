import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RedirectPage from './redirect-page'
import {setAccessToken} from "../../redux/authentication/authentication-action";

function mapDispatchtoProps(dispatch) {
    return {
        setAccessToken: (token) => {dispatch(setAccessToken(token))}
    }
}

export default withRouter(connect(null, mapDispatchtoProps)(RedirectPage));
