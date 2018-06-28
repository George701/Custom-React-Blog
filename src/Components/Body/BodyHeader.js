import React, { Component } from 'react';

class BodyHeader extends Component {

    state = {
        username: ''
    };

    render() {
        return (
            <div className="BodyHeader">
                <div className="NameInput">
                    <label>Name</label>
                    <input type="text" value={this.state.username} onChange={this.handelUserChange}/>
                </div>
            </div>
        );
    }

    handelUserChange = (ev) => {
        if (ev.target.value.length > 10) return
        this.setState({
            username: ev.target.value
        })
    }

}

export default BodyHeader;