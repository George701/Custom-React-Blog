import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentaryList from './Commentary/CommentaryList';

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
                {/*<button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>Update</button>*/}
                {this.getPost()}
                <CommentaryList
                    commentaries = {article.commentaries}
                    // key = {this.state.updateIndex}
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
        console.log('Post: ', 'update');
        if (!isOpen) {
            return (
                <div onClick={toggleOpen}>
                    <div className="PostBody">
                        <div className="imgContainer">
                            <img src={article.image} alt="This is an placeholder"/>
                        </div>
                        <div className="TextContainer">
                            <h3>{article.title}</h3>
                            <p>{(article.text).split(" ", 20).join(" ")}...</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div onClick={toggleOpen}>
                    <div className="PostBody">
                        <div className="imgContainer">
                            <img src={article.image} alt="This is an placeholder"/>
                        </div>
                        <div className="TextContainer">
                            <h3>{article.title}</h3>
                            <p>{article.text}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Post;