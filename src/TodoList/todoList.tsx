import * as React from "react";
import {Todo} from "../Todo/todo";

/**
 * todos: []
 * onDeleteTodo: () => void
 * onCheckTodo: () => void
 * onEditTodo: (nextName: string) => void
 */

interface TodoListPropsType {
    todos: {id: number, value: string, isDone: boolean}[],
    onDeleteTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onCheckTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onEditTodo: (todo: { id: number; value: string; isDone: boolean }, nextName: string) => void
}

export class TodoList extends React.Component<TodoListPropsType> {
    render() {
        const todos = this.props.todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} onDeleteTodo={() => this.props.onDeleteTodo(todo)}
                          onCheckTodo={() => this.props.onCheckTodo(todo)}
                          onEditTodo={(newValue) => this.props.onEditTodo(todo, newValue)}/>)
        });
        return <ul>{todos}</ul>
    }
}