import React, { Component } from 'react';
import Post from './Post/index';
import PropTypes from 'prop-types'
// import PostChart from './PostChart';
import accordion from '../../../Decarators/accordion';
import articles from '../../../API/articles';
import './Blog.css'

class Blog extends Component {

    static propTypes = {
      articles: PropTypes.array.isRequired,
      // Decorator: accordion
      openElementId: PropTypes.string,
      toggle: PropTypes.func.isRequired
    };

    render() {

        const {openElementId, toggle} = this.props;
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

                {/*<PostChart*/}
                    {/*articles = {this.props.articles}*/}
                {/*/>*/}
            </div>
        );
    }

}



export default accordion(Blog);