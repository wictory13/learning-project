import * as React from "react";
import * as ReactDom from "react-dom";
import {TodoHeader} from "./TodoHeader/todoHeader";
import {TodoForm} from "./TodoForm/todoForm";
import {TodoListStates} from "./TodoStates/todoListStates";

let id = 1;

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCheckTodo = this.handleCheckTodo.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.state = {todos: []};
    }

    handleAddTodo(todo) {
        const newTodo = {
            id: id,
            value: todo,
            isDone: false
        };
        id++;
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    handleCheckTodo(todo) {
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

    handleEditTodo(todo, newValue) {
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

    handleDeleteTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        });
    }

    render() {
        return (
            <div>
                <TodoHeader/>
                <TodoForm onAddTodo={this.handleAddTodo}/>
                <TodoListStates todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo}
                                onCheckTodo={this.handleCheckTodo}
                                onEditTodo={this.handleEditTodo}/>
            </div>
        );
    }
}

ReactDom.render(<TodoApp/>, document.getElementById("container"));
