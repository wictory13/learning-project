import * as React from "react";
import EditableField from "../EditableField";
import "./todo.css"

/**
 * Хороший контракт у всех
 * Разложить по каталожикам, стили тоже
 *
 * todo: {  }
 * onDeleteTodo: () => void
 * onCheckTodo: () => void
 * onEditTodo: (nextName: string) => void
 */
export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCheckTodo = this.handleCheckTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.state = {
            text: this.props.todo.value
        }
    }

    handleDeleteTodo() {
        this.props.onDeleteTodo(); // this.props.todo
    }

    handleCheckTodo() {
        this.props.onCheckTodo();
    }

    handleEditTodo() {
        this.props.onEditTodo(this.state.text);
    }

    render() {
        const className = this.props.todo.isDone ? "done" : "undone";

        const mark = this.props.todo.isDone ?
            <span onClick={this.handleCheckTodo}>&#10003; </span> :
            <span onClick={this.handleCheckTodo}>&#9711; </span>;

        return (
            <li style={{listStyleType: "none"}} className={className}>
                {mark}
                <EditableField
                    value={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                   onEditTodo={this.handleEditTodo}
                />
                <button onClick={this.handleDeleteTodo}>x</button>
            </li>);
    }

}