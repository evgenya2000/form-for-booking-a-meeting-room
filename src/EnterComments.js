import React from "react";

class EnterCommentsBlock extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {  
          fieldText: ""  
        };  
        this.onCommentsChangeHandler = this.onCommentsChangeHandler.bind(this);  
    }  

    onCommentsChangeHandler(e){  
        this.setState({  
          text: e.target.value  
        })  
    }  

    render() {
        return(
            <>
            <input className={this.props.name} placeholder={this.props.placeholder} onChange={this.onCommentsChangeHandler}></input>
            <pre>{JSON.stringify(this.state)}</pre>  
            </>
        );
    };
}

function EnterComments() {
    return(
    <EnterCommentsBlock
        name="textarea"
        placeholder="Enter Comments..."
    />);
};

export default EnterComments;