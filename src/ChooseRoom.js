import React from "react";

class ChooseRoomBlock extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {  
          room: "Советская"  
        };  
        this.onRoomChangeHandler = this.onRoomChangeHandler.bind(this);  
    }  

    onRoomChangeHandler(e){  
        this.setState({  
            room: e.target.value  
        }); 
    }  
    
    options = this.props.rooms.map((room) => {
        return <option value={room} key={room}>{room}</option>;
    });

    render() {
        return(
            <>
            <select value={this.state.room} onChange={this.onRoomChangeHandler} name="room">  
                {this.options}
            </select>
            </>
        );
    };
}

function ChooseRoom() {
    let numberRooms = [];
    let i;
    for(i = 1; i < 11; i++){
        numberRooms.push(i);
    }

    return(<ChooseRoomBlock
        rooms={numberRooms}
    />);
};


export default ChooseRoom;