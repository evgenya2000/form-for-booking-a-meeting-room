import React from "react";
import { formFields } from "./FieldBlock";

class Form extends React.Component {
    render(){
        return(
            <div className="form-block">
                <form>
                    {formFields}
                </form>
                <button className="send"> Отправить </button>  
                <button className="clear"> Очистить </button>  
            </div>
        );
    }
}

export default Form;