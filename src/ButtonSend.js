import React from "react";

class ButtonSend extends React.Component {
    /*
    sendForm = {

    }
    */
    render() {
        return(
            <button className="send" onClick={this.sendForm}> Отправить </button> 
        );
    };
}

export default ButtonSend;