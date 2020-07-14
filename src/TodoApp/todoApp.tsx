import * as React from "react";
import {TodoItem} from "../Domain/types";
import cn from "./todoApp.less";
import {TodoHeader} from "../TodoHeader/todoHeader";
import {TodoInput} from "../TodoInput/todoInput";
import {TodoListStatuses} from "../TodoListStatuses/todoListStatuses";

let id = 1;

interface TodoAppState {
    todos: TodoItem[]
}

export class TodoApp extends React.Component<{}, TodoAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {todos: []};
    }

    handleAddTodo = (todo: string) => {
        const newTodo = {
            id: id,
            value: todo,
            isDone: false
        };
        id++;
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    handleCheckTodo = (todo: TodoItem) => {
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

    handleEditTodo = (todo: TodoItem, newValue: string) => {
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

    handleDeleteTodo = (todo: TodoItem) => {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        });
    }

    handleDeleteDoneTodos = () => {
        let undoneTodos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({todos: undoneTodos})
    }

    handleCheckAllTodos = () => {
        const doneTodos = this.state.todos.filter(todo => todo.isDone);
        let newTodos = [];
        if (doneTodos.length === this.state.todos.length) {
            for (const todo of this.state.todos) {
                newTodos.push({
                    ...todo, isDone: false
                });
            }
        } else {
            for (const todo of this.state.todos) {
                if (!todo.isDone) {
                    newTodos.push({
                        ...todo, isDone: true
                    });
                } else {
                    newTodos.push(todo);
                }
            }
        }

        this.setState({
            todos: newTodos
        });
    }

    render() {
        return (
            <div className={cn.app}>
                <TodoHeader/>
                <div className={cn.form}>
                    <TodoInput onAddTodo={this.handleAddTodo}/>
                    <TodoListStatuses todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo}
                                      onCheckTodo={this.handleCheckTodo}
                                      onEditTodo={this.handleEditTodo}
                                      onDeleteDoneTodos={this.handleDeleteDoneTodos}
                                      onCheckAllTodos={this.handleCheckAllTodos}
                    />
                </div>
            </div>
        );
    }
}