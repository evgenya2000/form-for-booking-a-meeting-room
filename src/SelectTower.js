import React from "react";

class SelectTowerBlock extends React.Component {
    render() {
        return(
            <input className="field-select" placeholder="Search..."></input>
        );
    };
}

function SelectTower() {
    return(<SelectTowerBlock/>);
};

export default SelectTower;