import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
    state = {
        openElementId: null
    };

    render(){
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggle = {this.handleToggle}
        />
    }

    handleToggle = (id) => {
        const {openElementId} = this.state;
        this.setState({
            openElementId: openElementId !== id ? id : null
        })
    }
}