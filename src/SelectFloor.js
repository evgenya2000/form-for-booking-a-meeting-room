import React from "react";

class SelectFloorBlock extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
          floor: "3"  
        };  
        this.onFloorChangeHandler = this.onFloorChangeHandler.bind(this);  
    }  

    onFloorChangeHandler(e){  
        this.setState({  
            floor: e.target.value  
        }); 
    }  
    
    options = this.props.numbers.map((number) => {
        return <option value={number} key={number}>{number}</option>;
    });

    render() {
        return(
            <>
            <select value={this.state.floor} onChange={this.onFloorChangeHandler} name="floor">  
                {this.options}
            </select>
            </>
        );
    };
}

function SelectFloor() {
    let numbersFloors = [];
    let i;
    for(i = 3; i < 28; i++){
        numbersFloors.push(i);
    }

    return(<SelectFloorBlock
        numbers={numbersFloors}
    />);
};

export default SelectFloor;