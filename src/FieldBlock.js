import React from "react";
import SelectTower from "./SelectTower";
import SelectFloor from "./SelectFloor";
import ChooseRoom from "./ChooseRoom";
import SelectTime from "./SelectTime";
import EnterComments from "./EnterComments";

class FieldBlock extends React.Component {
    render() {
        return(
            <div className="field-block">
                <label>{this.props.name}</label>  
                {this.props.field} 
            </div>
        );
    }
}

const blocksFields = [
    {
        name: "Выберите башню:",
        field: SelectTower(),
        id: 1,
    },
    {
        name: "Выберите этаж:",
        field: SelectFloor(),
        id: 2,
    },
    {
        name: "Выберите комнату:",
        field: ChooseRoom(),
        id: 3,
    },
    {
        name: "Выберите время:",
        field: SelectTime(),
        id: 4,
    },
    {
        name: "Ваши комментарии:",
        field: EnterComments(),
        id: 5,
    },
]

const formFields = blocksFields.map((block) =>
        <FieldBlock
            name={block.name}
            field={block.field}
            key={block.id}
        />
);

export {formFields};