import React from "react";

class SelectFloorBlock extends React.Component {
    render() {
        return(
            <input className="field-select" placeholder="Search..."></input>
        );
    };
}

function SelectFloor() {
    return(<SelectFloorBlock/>);
};

export default SelectFloor;