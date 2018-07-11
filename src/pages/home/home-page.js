import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';

export default class HomePage extends Component {

    componentWillMount() {
        let {getMedia} = this.props;
        getMedia();
    }

    render() {
        let{images} =this.props;
        return (
            <Gallery photos={images} />
        )
    }
}
