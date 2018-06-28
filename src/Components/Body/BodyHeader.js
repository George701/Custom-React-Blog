import React, { Component } from 'react';

class BodyHeader extends Component {
    //State is a condition that can influence on component
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {isOpen} = this.state;
        // const body = isOpen ? <p>{this.props.text}</p> : null;
        return (
            <div className="Body-Header">
                <h1>{this.props.title}</h1>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'hide' : 'show'}
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody(){
        if (!this.state.isOpen) return null;
        return (

            <div>
                <br/>
                <hr/>
                <br/>
                {/*<span>{(new Date).toLocaleString()}</span>*/}
                <p>{this.props.text}</p>
            </div>

        )

    }

    //Better practice is to use arrow functions
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default BodyHeader;