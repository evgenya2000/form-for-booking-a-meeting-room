import React from "react";
import { formFields } from "./FieldBlock";
import ButtonSend from "./ButtonSend"
import ButtonClear from "./ButtonClear"

class Form extends React.Component {
    render(){
        return(
            <div className="form-block">
                <form id="form">
                    {formFields}
                    <ButtonSend/>
                    <ButtonClear/>
                </form>
            </div>
        );
    }
}

export default Form;