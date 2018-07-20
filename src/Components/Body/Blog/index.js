import React, {Component} from 'react';
import Post from './Post/index';
import PropTypes from 'prop-types'
import accordion from '../../../decarators/accordion';
import './Blog.css'
import {connect} from 'react-redux';

class Blog extends Component {

    static propTypes = {
      // from connect
      articles: PropTypes.array,
      // Decorator: accordion
      openElementId: PropTypes.string,
      toggle: PropTypes.func.isRequired
    };

    render() {

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

export default connect(({filters, posts}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredPosts = posts.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
    return{
       articles: filteredPosts
    }
})(accordion(Blog));

// export default connect(storage => ({
//     articles: storage.posts
//
// }))(accordion(Blog));