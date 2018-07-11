import React, {Component} from 'react';
import {util} from '../../util/util'

export default class RedirectPage extends Component {

    componentDidMount() {
        let {setAccessToken} = this.props;
        if (window.location.hash && window.location.hash.substr(1)) {
            setAccessToken(util.getTokenFromHash(window.location.hash.substr(1)));
            this.props.history.push('/home')
        }
    }

    render() {
        return (
            <h1>Redirecting</h1>
        )
    }
}
