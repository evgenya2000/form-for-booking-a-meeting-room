import React from "react";
import { formFields } from "./FieldBlock";
import ButtonSend from "./ButtonSend"
import ButtonClear from "./ButtonClear"
import moment from "moment/moment"

class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        var object = {};
        var formData = new FormData(document.forms.form);

        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        if ("09:00:00" <= object['time-start']+ ":00" &&
         object['time-start']+ ":00" < object['time-end']+ ":00" && 
         "21:00:00" >=  object['time-end']+":00")
        {
            if (moment(object['date']).format("L") === moment().format("L")) {
                if (object['time-start']+ ":00" >= moment().format('HH:mm:ss')){
                    console.log(JSON.stringify(object));
                } else {
                    alert('\n Невозможно забронировать это время на текущую дату');
                }
                return;
            }
            console.log(JSON.stringify(object));
        } else {
            alert('\nРасписание работы переговорных комнат:\n 09:00 - 21:00\n Указывайте начало и конец интервала в бронировании, например: 09:00-11:00');
        };
    }

    render(){
        return(
            <div className="form-block">
                <form id="form">
                    {formFields}
                    <div className="buttons">
                        <ButtonSend
                        send={this.handleSubmit}
                        />
                        <ButtonClear/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;