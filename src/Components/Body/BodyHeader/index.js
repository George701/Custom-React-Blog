import React, { Component } from 'react';
import Select from 'react-select';
import articles from '../../../API/articles';
import PropTypes from 'prop-types'
import 'react-select/dist/react-select.css';
import './BodyHeader.css';
import DayPicker from './DayPicker/index';
import Counter from './Counter/index';


class BodyHeader extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selection: null,
        username: ''
    };

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div className="BodyHeader">
                <div className="NameInput">
                    <label>Name</label>
                    {/*Reverse data flow*/}
                    <input type="text" value={this.state.username} onChange={this.handelUserChange}/>
                </div>
                <div className="Select">
                    <Select options = {options} value={this.state.selection} onChange={this.changeSelection} multi/>
                </div>
                <DayPicker/>
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

    changeSelection = selection => this.setState({selection});
}

export default BodyHeader;