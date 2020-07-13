import * as React from "react";
import {Todo} from "../Todo/todo";
import cn from './todoList.less'
import {TodoItem} from "../Domain/todoItem";

interface TodoListProps {
    todos: TodoItem[],
    onDeleteTodo: (todo: TodoItem) => void,
    onCheckTodo: (todo: TodoItem) => void,
    onEditTodo: (todo: TodoItem, nextName: string) => void,
    onCheckAllTodos: () => void
}


export class TodoList extends React.Component<TodoListProps> {
    render() {
        const todos = this.props.todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} onDeleteTodo={() => this.props.onDeleteTodo(todo)}
                          onCheckTodo={() => this.props.onCheckTodo(todo)}
                          onEditTodo={(newValue) => this.props.onEditTodo(todo, newValue)}/>)
        });
        return <div className={cn.todoList}>
            <input type="checkbox"
                   onChange={this.props.onCheckAllTodos}
                   checked={this.props.todos.filter(todo => todo.isDone).length === this.props.todos.length && this.props.todos.length > 0}
                   className={cn.commonCheckbox}
            />
            {todos}
        </div>
    }
}