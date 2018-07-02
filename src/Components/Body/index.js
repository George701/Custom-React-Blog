import React, { Component } from 'react';
import BodyHeader from './BodyHeader/index';
import Blog from './Blog/index';
import './Body.css';

class Body extends Component {
    //Props Comes From Parent
    getDefaultPropos(){
        return{
            title1: "Hello! I am a body header.",
            text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum felis sed ultrices maximus. Cras volutpat massa eget urna euismod sollicitudin. Suspendisse mollis ultrices rutrum. Maecenas laoreet dolor ut fermentum tempor. Sed luctus leo tellus, pretium lobortis enim semper eu. Nunc id enim eget odio venenatis fermentum vitae eu nunc. Etiam vitae nisl nec lorem euismod malesuada eu sit amet lectus. Cras porta eros at mauris aliquet, eget faucibus tortor bibendum. Praesent hendrerit libero ex, ut facilisis purus venenatis sed.",
            blog_title: "This is a blog template"
        }
    }

    render() {
        return (
            <div className="Body">
                <BodyHeader/>
                <Blog
                    title = {this.getDefaultPropos().blog_title}
                />
            </div>
        );
    }

}

export default Body;