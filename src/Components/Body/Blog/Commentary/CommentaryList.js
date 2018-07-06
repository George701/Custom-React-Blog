import React, { Component } from 'react';
import Commentary from './Commentary'
import toggleOpen from '../../../../decarators/toggleOpen';
import './Commentary.css';
import AddCommentary from './AddComentary/index';

class CommentaryList extends Component {

    static defaultProps = {
      commentaries: []
    };

    render() {
        const {isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h4>Commentaries</h4>
                <button onClick={toggleOpen}>
                    {isOpen ? 'hide' : 'show'}
                </button>
                {this.getComments()}
            </div>
        );
    }

    getCommentaries() {
        const {commentaries} = this.props;

        if (!commentaries.length)
        {
            return (
                <div>
                    <p className="noComments">There is no any commentaries.</p>
                    <AddCommentary/>
                </div>
            )
        }else{
            const commentElements = commentaries.map((commentary) =>
                    <Commentary
                        key = {commentary.id}
                        data = {commentary}
                    />
            );
            return (
                <div>
                    {commentElements}
                    <AddCommentary/>
                </div>
            )
        }
    }

    getComments(){
        const {isOpen} = this.props;
        if (!isOpen) return null;
        return(
            <div className="CommentaryList">
                {this.getCommentaries()}
            </div>
        )
    }


}

export default toggleOpen(CommentaryList);