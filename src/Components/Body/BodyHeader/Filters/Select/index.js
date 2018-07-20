import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";
import './Select.css';
import articles from "../../../../../API/articles";
import {connect} from 'react-redux';
import { changeSelection } from '../../../../../AC';

class SelectPost extends Component{
    static propTypes = {
        articles: PropTypes.array
    };

    render(){
        const { selected } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return(
            <div className="Select">
                <Select options = {options}
                        value={selected}
                        onChange={this.changeSelection}
                        multi/>
            </div>
        )
    }
    changeSelection = selected => this.props.changeSelection(selected.map(option => option.value));
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(SelectPost);