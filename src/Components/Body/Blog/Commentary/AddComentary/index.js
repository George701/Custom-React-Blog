import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './AddCommentary.css';

class AddCommentary extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    };

    render(){
        return(
            <div>
                <p className="decorated">
                    <span>Add Commentary</span>
                </p>
                <form action="#" id="commentform">
                    <span>Your Name</span><br/>
                    <input
                        value={this.state.user}
                        onChange={this.handleChange('user')}
                        className={this.getClassName('user')}
                    />
                    <br/>
                    <span>Your Message</span><br/>
                    <textarea
                        name="comment"
                        form="commentform"
                        cols="30"
                        rows="4"
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        className={this.getClassName('text')}
                    >Enter yor commentary here...</textarea>
                    <br/>
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }

    handleSubmit = ev =>{
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : '';

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    };

}

const limits = {
  user: {
      min: 5,
      max: 15
  },
  text: {
      min: 20,
      max: 180
  }
};

export default AddCommentary;