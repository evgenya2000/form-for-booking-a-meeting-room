import React from "react";

class FieldBlock extends React.Component {
    render() {
        return(
            <div className="field-block" type={this.props.type}>
                <label>{this.props.name}</label>  
                <input type="text" placeholder={this.props.placeholder}/>  
            </div>
        );
    }
}

const fields = [
    {
        name: "Выберите башню:",
        placeholder: "Search...",
        id: 1,
    },
    {
        name: "Выберите этаж:",
        placeholder: "Search...",
        id: 2,
    },
    {
        name: "Выберите комнату:",
        placeholder: "Search...",
        id: 3,
    },
    {
        name: "Выберите время:",
        placeholder: "Search...",
        id: 4,
    },
    {
        name: "Ваши комментарии:",
        placeholder: "Enter comments...",
        id: 5,
        type: "comments"
    },
]

const formFields = fields.map((field) =>
    <FieldBlock
        name={field.name}
        placeholder={field.placeholder}
        key={field.id}
        type={field.type}
    />
);

export {fields, formFields};