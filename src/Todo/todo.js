import * as React from "react";
import EditableField from "../EditableField/EditableField";
import "./todo.css"

/**
 * todo: {id: number, value: string, isDone: boolean}
 * onDeleteTodo: () => void
 * onCheckTodo: () => void
 * onEditTodo: (nextName: string) => void
 */
export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onCheckTodo = this.onCheckTodo.bind(this);
        this.onEditTodo = this.onEditTodo.bind(this);
        this.state = {
            text: this.props.todo.value
        }
    }

    onDeleteTodo() {
        this.props.onDeleteTodo();
    }

    onCheckTodo() {
        this.props.onCheckTodo();
    }

    onEditTodo() {
        this.props.onEditTodo(this.state.text);
    }

    render() {
        const className = this.props.todo.isDone ? "done" : "undone";

        const mark = this.props.todo.isDone ?
            <span onClick={this.onCheckTodo}>&#10003; </span> :
            <span onClick={this.onCheckTodo}>&#9711; </span>;

        return (
            <li style={{listStyleType: "none"}} className={className}>
                {mark}
                <EditableField
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                    onEditTodo={this.onEditTodo}
                />
                <button onClick={this.onDeleteTodo}>x</button>
            </li>);
    }

}