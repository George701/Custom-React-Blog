import React, {Component} from 'react';
import './AddCommentary.css';

class AddCommentary extends Component {

    render(){
        return(
            <div>
                <p className="decorated">
                    <span>Add Commentary</span>
                </p>
                <form action="#" id="commentform">
                    <span>Your Name</span><br/>
                    <input type="text" name="name"/>
                    <br/>
                    <span>Your Message</span><br/>
                    <textarea name="comment" form="commentform" cols="30" rows="4">Enter yor commentary here...</textarea>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default AddCommentary;