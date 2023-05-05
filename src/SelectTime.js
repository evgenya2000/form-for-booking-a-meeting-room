import React from "react";

class SelectTimeBlock extends React.Component {
    render() {
        return(
            <input className="field-select" placeholder="Search..."></input>
        );
    };
}

function SelectTime() {
    return(<SelectTimeBlock/>);
};

export default SelectTime;