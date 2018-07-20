import React, { Component } from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DayPicker.css';
// import reset from '../../../assets/img/reset.png';
import {connect} from 'react-redux';
import { changeDateRange } from "../../../../../AC";

export class PickDate extends Component{
    static defaultProps = {
        numberOfMonths: 2,
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        // this.handleResetClick = this.handleResetClick.bind(this);
        // this.state = this.getInitialState();
    }
    // getInitialState() {
    //     return {
    //         from: undefined,
    //         to: undefined,
    //     };
    // }
    // handleDayClick(day) {
    //     const range = DateUtils.addDayToRange(day, this.state);
    //     this.setState(range);
    // }

    handleDayClick = (day) => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    // handleResetClick() {
    //     this.setState(this.getInitialState());
    // }

    render(){
        // const { from, to } = this.state;
        const { from, to } = this.props.range;
        const modifiers = { start: from, end: to };
        const selectedRange = from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`;
        return (
            <div className="Range">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {selectedRange}{' '}
                    {/*{from &&*/}
                    {/*to && (*/}
                        {/*<div>*/}
                            {/*<button className="btnReset" onClick={this.handleResetClick}>*/}
                                {/*<img src={reset} alt="reset"/>*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    {/*)}*/}
                </p>

                <DayPicker
                    className="Selectable"
                    // numberOfMonths={this.props.numberOfMonths}
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    ref='daypicker'
                />
            </div>
        )
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}),{ changeDateRange })(PickDate);