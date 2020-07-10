import * as React from "react";
import * as ReactDom from "react-dom";
import {TodoHeader} from "./TodoHeader/todoHeader";
import {TodoInput} from "./TodoInput/todoInput";
import {TodoListStates} from "./TodoListStates/todoListStates";
import cn from "./index.less"

let id = 1;

interface TodoAppStateType {
    todos: { id: number, value: string, isDone: boolean }[]
}

export class TodoApp extends React.Component<{}, TodoAppStateType> {
    constructor(props: {}) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCheckTodo = this.handleCheckTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.handleDeleteDoneTodos = this.handleDeleteDoneTodos.bind(this);
        this.state = {todos: []};
    }

    handleAddTodo(todo: string) {
        const newTodo = {
            id: id,
            value: todo,
            isDone: false
        };
        id++;
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    handleCheckTodo(todo: { id: number, value: string, isDone: boolean }) {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                {
                    ...todo,
                    isDone: !todo.isDone
                },
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        });
    }

    handleEditTodo(todo: { id: number, value: string, isDone: boolean }, newValue: string) {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                {
                    ...this.state.todos[this.state.todos.indexOf(todo)],
                    value: newValue,
                },
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        })
    }

    handleDeleteTodo(todo: { id: number, value: string, isDone: boolean }) {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        });
    }

    handleDeleteDoneTodos() {
        let undoneTodos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({todos: undoneTodos})
    }

    render() {
        return (
            <div className={cn.todoapp}>
                <TodoHeader/>
                <div className={cn.todoform}>
                <TodoInput onAddTodo={this.handleAddTodo}/>
                <TodoListStates todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo}
                                onCheckTodo={this.handleCheckTodo}
                                onEditTodo={this.handleEditTodo}
                onDeleteDoneTodos={this.handleDeleteDoneTodos}/>
                </div>
            </div>
        );
    }
}

ReactDom.render(<TodoApp/>, document.getElementById("container"));
