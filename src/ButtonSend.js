import React from "react";

class ButtonSend extends React.Component {
    render() {
        return(
            <button className="send" onClick={this.props.send}> Отправить </button> 
        );
    };
}

export default ButtonSend;