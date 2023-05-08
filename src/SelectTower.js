import React from "react";

class SelectTowerBlock extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
          tower: "А"  
        };  
        this.onTowerChangeHandler = this.onTowerChangeHandler.bind(this);  
    }  

    onTowerChangeHandler(e){  
        this.setState({  
            tower: e.target.value  
        })  
    }  

    render() {
        return(
            <>
            <select value={this.state.tower} onChange={this.onTowerChangeHandler} name='tower'>  
                <option value="А">А</option>  
                <option value="Б">Б</option>  
            </select>
            </>
        );
    };
}

function SelectTower() {
    return(<SelectTowerBlock/>);
};

export default SelectTower;