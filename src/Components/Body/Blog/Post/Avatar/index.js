import React, {Component} from 'react';
import noAvatar from '../../../../assets/img/non-avatar.jpg';
import './Avatar.css';

class Avatar extends Component {
    static defaultProps = {
        image: ""
    };


    render(){
        return (
            <div className="imgContainer">
                {this.getAvatar()}
            </div>
        );
    }

    getAvatar(){
        const {image} = this.props;

        if (!image.length)
        {
            return (
                <img src={noAvatar} alt="This is an placeholder"/>
            )
        }else{
            return (
                <img src={image} alt="This is an placeholder"/>
            )
        }
    }
}



export default Avatar;