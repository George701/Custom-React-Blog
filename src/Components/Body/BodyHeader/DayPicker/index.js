import React, { Component } from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DayPicker.css';
import reset from '../../../assets/img/reset.png';

export class PickDate extends Component{
    static defaultProps = {
        numberOfMonths: 2,
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick() {
        this.setState(this.getInitialState());
    }

    render(){
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="Range">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                            ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <div>
                            <button className="btnReset" onClick={this.handleResetClick}>
                                <img src={reset} alt="reset"/>
                            </button>
                        </div>
                    )}
                </p>

                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }
}

export default PickDate;