import * as React from "react";
import {Todo} from "../Todo/todo";

export class TodoList extends React.Component {
    render() {
        let todos;
        if (this.props.state === 'all') {
            todos = this.props.allTodos.todos;
        } else if (this.props.state === 'active') {
            todos = this.props.allTodos.undoneTodos;
        } else {
            todos = this.props.allTodos.doneTodos;
        }

        todos = todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} onDeleteTodo={this.props.deleteTodo} onCheckTodo={this.props.clickTodo}
                          onEditTodo={this.props.clickEditTodo}/>)
        });
        return <ul>{todos}</ul>
    }
}