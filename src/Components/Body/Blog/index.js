import React, {Component} from 'react';
import Post from './Post/index';
import PropTypes from 'prop-types'
import accordion from '../../../decarators/accordion';
import './Blog.css'
import {connect} from 'react-redux';
import {filteredPostsSelector} from '../../../selectors/index';

class Blog extends Component {

    static propTypes = {
      // from connect
      articles: PropTypes.array.isRequired,
      // Decorator: accordion
      openElementId: PropTypes.string,
      toggle: PropTypes.func.isRequired
    };

    render() {
        // after any manipulation will update render, because every connect will run shouldComponentUpdate
        console.log('---', 'update post blog');
        const {openElementId, toggle, articles} = this.props;
        const articleElements = articles.map((article) =>
            <div key={article.id} className="BlogPost">
                <Post
                    article = {article}
                    isOpen = {article.id === openElementId}
                    toggleOpen = {toggle.bind(this, article.id)}
                />
            </div>
        );
        return (
            <div className="Blog">
                <h2>{this.props.title}</h2>
                    {articleElements}
            </div>
        );
    }

}


export default connect((state) => {
    // Uses shouldComponentUpdate

    return{
       articles: filteredPostsSelector(state)
    }
})(accordion(Blog));

