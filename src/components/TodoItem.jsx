import React from "react";

export class TodoItem extends React.Component {
    handleChange = () => {
        console.log("clicked");
    };
    render() {
        return (
            <li>
                <input type="checkbox"
                       checked={this.props.todo.completed}
                       onChange={() => this.props.handleChangeProps(this.props.todo.id)}/>
                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Delete
                </button>
                {this.props.todo.title}
            </li>
        )
    }
}