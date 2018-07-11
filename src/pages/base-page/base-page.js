import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InstaIcon from '../../resources/insta.png'


export default class BasePage extends Component {

    render() {
        let {authenticationUrl} =this.props;

        return (
           <a href={authenticationUrl}><img src={InstaIcon} width="100" height="100" alt={'insta-icon'}/></a>
        );
    }
}

BasePage.propTypes = {
    login: PropTypes.func
};



