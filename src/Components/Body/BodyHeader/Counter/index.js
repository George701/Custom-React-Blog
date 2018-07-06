import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../../../AC';
import './Counter.css';

class Counter extends Component{
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render(){
        return (
            <div className="ClickCounter">
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me!</button>
            </div>
        )
    }

    handleIncrement = () => {
        console.log('---', 'increment');
        // func should be taken from props
        const {increment} = this.props;
        increment();
    }
}
// 'connect' is something that bonds react with redux components
export default connect((state) => ({
    counter: state.count
}), {increment})(Counter);