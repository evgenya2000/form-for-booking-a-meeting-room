import React from "react";

class ButtonClear extends React.Component {

    clearForm = () => { 
        document.getElementById("form").reset();
    }

    render() {
        return(
            <button className="clear" onClick={this.clearForm}> Очистить </button>
        );
    };
}

export default ButtonClear;