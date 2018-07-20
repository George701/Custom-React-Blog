import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentaryList from '../Commentary/CommentaryList';
import './Post.css';
import Avatar from './Avatar/index';
import {connect} from 'react-redux';
import {deletePost} from '../../../../AC';
import btnDelete from '../../../assets/img/delete.png';

class Post extends PureComponent {
    // Dynamic check of types
    static propTypes = {
        article: PropTypes.shape({
            title:  PropTypes.string,
            text:   PropTypes.string,
            id:     PropTypes.string,
            image:  PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps(nextProps){
        // console.log('i: ', 'WillReceiveProps');
        // console.log('u: ', this.props.isOpen, nextProps.isOpen);
    }

    // componentWillMount(){
    //     console.log('i: ', 'WillMount');
    // }

    // When post is being viewed, this function force to update only this post, but not the others!
    // However when user clicks next post it will add 2, because one should be closed and another opened
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.isOpen !== this.props.isOpen;
    // }
    // PureComponent is making the same functionality of shouldComponentUpdate
    // Use it only when you know, what is the problem and how to solve it

    render() {
        const {article} = this.props;
        console.log('Post', 'update article');
        return (
            <div className="Post" ref={this.setContainerRef}>
                {this.getPost()}
                <CommentaryList
                    commentaries = {article.commentaries}
                />
            </div>
        );
    }

    setContainerRef = ref => {
        // let container = ref;
        // console.log('i: ', 'post element is created');
        // console.log('i: ', container);
    };

    // componentDidMount(){
    //     console.log('i: ', 'DidMount');
    //     // console.log(this.props);
    // }

    getPost(){
        const {article, isOpen, toggleOpen} = this.props;
        // console.log('Post: ', 'update');
        if (!isOpen) {
            return (
                <div >
                    <button className="btnDelete" onClick={this.handleDelete}><img src={btnDelete} alt="Delete"/></button>
                    <div className="PostBody" onClick={toggleOpen}>
                        <Avatar
                            image = {article.image}
                        />
                        <div className="TextContainer">
                            <h3>{article.title}</h3>
                            <p>{(article.text).split(" ", 20).join(" ")}...</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div >
                    <button className="btnDelete" onClick={this.handleDelete}><img src={btnDelete} alt="Delete"/></button>
                    <div className="PostBody" onClick={toggleOpen}>
                        <Avatar
                            image = {article.image}
                        />
                        <div className="TextContainer">
                            <h3>{article.title}</h3>
                            <p>{article.text}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    handleDelete = () => {
        const {article, deletePost} = this.props;
        deletePost(article.id);
        console.log('---', 'delete');
        console.log('-id', article.id);
    }
}

export default connect(null, { deletePost })(Post);