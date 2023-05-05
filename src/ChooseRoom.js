import React from "react";

class ChooseRoomBlock extends React.Component {
    render() {
        return(
            <input className="field-select" placeholder="Search..."></input>
        );
    };
}

function ChooseRoom() {
    return(<ChooseRoomBlock/>);
};

export default ChooseRoom;