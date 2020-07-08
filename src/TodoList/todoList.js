import * as React from "react";
import {Todo} from "../Todo/todo";

/**
 * todos: []
 * onDeleteTodo: () => void
 * onCheckTodo: () => void
 * onEditTodo: (nextName: string) => void
 */
export class TodoList extends React.Component {
    render() {
        console.log(this.props.todos)
        const todos = this.props.todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} onDeleteTodo={() => this.props.onDeleteTodo(todo)}
                          onCheckTodo={() => this.props.onCheckTodo(todo)}
                          onEditTodo={(newValue) => this.props.onEditTodo(todo, newValue)}/>)
        });
        return <ul>{todos}</ul>
    }
}