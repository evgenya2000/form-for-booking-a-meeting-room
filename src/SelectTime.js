import React from "react";
import moment from "moment/moment";
class SelectTimeBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*date: moment().format("YYYY-MM-DDTkk:mm"),*/
            date:moment().format("YYYY-MM-DD"),
            time_start:'',
            time_end:''
        }
        this.onTimeChangeHandler = this.onTimeChangeHandler.bind(this);
    }

    onTimeChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="date-and-time">
                <input
                    type="date"
                    value={this.state.date}
                    min={moment().format('YYYY-MM-DD')}
                    name="date"
                    className="date"
                    onChange={this.onTimeChangeHandler}
                />
                <div className="time">
                    <input
                        type="time"
                        name="time-start"
                        className="time-start"
                        onChange={this.onTimeChangeHandler}
                        required
                    />
                    <input
                        type="time"
                        name="time-end"
                        className="time-end"
                        onChange={this.onTimeChangeHandler}
                        required
                    />
                </div>
            </div>
        );
    };
}

function SelectTime() {
    return (<SelectTimeBlock />);
};

export default SelectTime;