import React from "react";
import { formFields } from "./FieldBlock";
import ButtonSend from "./ButtonSend"
import ButtonClear from "./ButtonClear"

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
        console.log(json);
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