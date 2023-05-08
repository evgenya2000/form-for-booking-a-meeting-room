import React from "react";
import moment from "moment/moment";
class SelectTimeBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*date: moment().format("YYYY-MM-DDTkk:mm"),*/
            date:moment().format("YYYY-MM-DD"),
            time_start: moment().format('HH:mm'),
            time_end: moment().add('hours', 2).format('HH:mm')
        };
        this.onTimeChangeHandler = this.onTimeChangeHandler.bind(this);
    }

    onTimeChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    render() {
        return (
            <>
                <input
                    type="date"
                    value={this.state.date}
                    min={moment().format('YYYY-MM-DD')}
                    name="date"
                    onChange={this.onTimeChangeHandler}
                />
                <input
                    type="time"
                    value={this.state.time_start}
                    min='9:00'
                    max='21:00'
                    name="time_start"
                    onChange={this.onTimeChangeHandler}
                    required
                />
                <input
                    type="time"
                    value={this.state.time_end}
                    min={this.state.time_start}
                    max='21:00'
                    name="time_end"
                    onChange={this.onTimeChangeHandler}
                    required
                />
            </>
        );
    };
}

function SelectTime() {
    return (<SelectTimeBlock />);
};

export default SelectTime;