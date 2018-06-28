import React, {Component as ReactComponent} from 'react';


export default (OriginalComponent) => class WrapperComponent extends ReactComponent {
    state = {
        isOpen: false
    };

    // componentDidMount(){
    //     console.log('toggleOpen, ', 'componentDidMount')
    // }
    //
    // componentDidUpdate(){
    //     console.log('toggleOpen, ', 'componentDidUpdate')
    // }

    render(){
        return(
            <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
        )
    }

    //Better practice is to use arrow functions
    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        console.log('---', ev.nativeEvent);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

