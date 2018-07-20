import React, { Component } from 'react';
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css';
import './BodyHeader.css';
import Filters from './Filters/index';
import Counter from './Counter/index';


class BodyHeader extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        username: ''
    };

    render() {
        return (
            <div className="BodyHeader">
                <div className="NameInput">
                    <label>Name</label>
                    {/*Reverse data flow*/}
                    <input type="text" value={this.state.username} onChange={this.handelUserChange}/>
                </div>
                <Filters/>
                <Counter/>
            </div>
        );
    }

    handelUserChange = (ev) => {
        if (ev.target.value.length > 10) return;
        this.setState({
            username: ev.target.value
        })
    };
}

export default BodyHeader;