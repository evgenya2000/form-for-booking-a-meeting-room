import React from "react";
import { formFields } from "./FieldBlock";
import ButtonSend from "./ButtonSend"
import ButtonClear from "./ButtonClear"
import moment from "moment";

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
        
        var json = JSON.stringify(object);
        /*console.log(json);*/
        if ("09:00:00" < object['time-start']+ ":00" &&
         object['time-start']+ ":00" < object['time-end']+ ":00" && 
         "21:00:00" >  object['time-end']+":00")
        {
            console.log(json);
        }else{
            alert('\n Начало работы переговорных 9:00\n Конец 21:00\n Указывайте начало и конец времени бронирования по образцу: 09:00 - 11:00');
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