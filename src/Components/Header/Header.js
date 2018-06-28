import React, { Component } from 'react';
import Greeting from './Greeting-with-logo';
import PropTypes from 'prop-types';

class Header extends Component {
    /*Props Comes From Parent*/
    getDefaultPropos(){
        return{
            title: "Welcome to my web page!"
        }
    }

    render() {
        return (
            <header className="App-header">
                <Greeting
                    title = {this.getDefaultPropos().title}
                />
                {/*Props Comes From Parent*/}
                <h3>{this.props.description}</h3>
                <span/>
                <h5>Check out more interesting features on official web page!</h5>
                                            {/*"//" - is really important!!!*/}
                <p><a onClick={this.Reference.bind(this, '//getbootstrap.com')} href="href-no-hash" role="button">Learn More</a></p>
            </header>
        );
    }

    Reference(link){
        var temp = window.open(link, 'blank');
        temp.focus();
    }
}

// If content does not fulfill type, it will not be displayed
Header.propTypes = {
    // without defining title, page will not load
    // title: PropTypes.string.isRequired
    title: PropTypes.string
};

export default Header;