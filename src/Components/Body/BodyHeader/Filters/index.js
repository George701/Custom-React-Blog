import React, { Component } from 'react';
import DayPicker from './DayPicker/index';
import './Filters.css'
import Select from './Select/index'

class Filters extends Component {
    render(){
        return(
            <div>
                <Select/>
                <DayPicker/>
            </div>
        )

    }
}

export default Filters;