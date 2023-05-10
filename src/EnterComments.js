import React from "react";

class EnterCommentsBlock extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
          comments: ""  
        };  
        this.onCommentsChangeHandler = this.onCommentsChangeHandler.bind(this);  
    }  

    onCommentsChangeHandler(e){  
        this.setState({  
            comments: e.target.value  
        })  
    }  

    render() {
        return(
            <>
            <input 
                className={this.props.name} 
                value={this.state.comments} 
                placeholder={this.props.placeholder} 
                name="textarea"
                onChange={this.onCommentsChangeHandler} 
            />
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