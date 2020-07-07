import * as React from "react";
import * as ReactDom from "react-dom";
import {TodoHeader} from "./TodoHeader/todoHeader";
import {TodoForm} from "./TodoForm/todoForm";
import {TodoListStates} from "./TodoStates/todoListStates";


let id = 1;

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.onClickTodo = this.onClickTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.state = {todos: [], undoneTodos: [], doneTodos: []};
    }

    addTodo(todo) {
        const newTodo = {
            id: id,
            value: todo,
            isDone: false
        };
        id++;
        this.setState({todos: [...this.state.todos, newTodo], undoneTodos: [...this.state.undoneTodos, newTodo]});
    }

    onClickTodo(todo) {
        todo.isDone = !todo.isDone;
        if (todo.isDone) {
            this.setState({
                doneTodos: [...this.state.doneTodos, todo],
                undoneTodos: [
                    ...this.state.undoneTodos.slice(0, this.state.undoneTodos.indexOf(todo)),
                    ...this.state.undoneTodos.slice(this.state.undoneTodos.indexOf(todo) + 1),
                ]
            });
        } else {
            this.setState({
                undoneTodos: [...this.state.undoneTodos, todo],
                doneTodos: [
                    ...this.state.doneTodos.slice(0, this.state.doneTodos.indexOf(todo)),
                    ...this.state.doneTodos.slice(this.state.doneTodos.indexOf(todo) + 1),
                ]
            });
        }
    }

    editTodo(todo, newValue) {
        if (todo.isDone) {
            this.state.doneTodos[this.state.doneTodos.indexOf(todo)].value = newValue;
        } else {
            this.state.undoneTodos[this.state.undoneTodos.indexOf(todo)].value = newValue;
        }
        this.setState({todos: this.state.todos, undoneTodos: this.state.undoneTodos, doneTodos: this.state.doneTodos});
    }

    removeTodo(todo) {
        this.setState({
            todos: [
                ...this.state.todos.slice(0, this.state.todos.indexOf(todo)),
                ...this.state.todos.slice(this.state.todos.indexOf(todo) + 1),
            ]
        });
        if (todo.isDone) {
            this.setState({
                doneTodos: [
                    ...this.state.doneTodos.slice(0, this.state.doneTodos.indexOf(todo)),
                    ...this.state.doneTodos.slice(this.state.doneTodos.indexOf(todo) + 1),
                ]
            });
        } else {
            this.setState({
                undoneTodos: [
                    ...this.state.undoneTodos.slice(0, this.state.undoneTodos.indexOf(todo)),
                    ...this.state.undoneTodos.slice(this.state.undoneTodos.indexOf(todo) + 1),
                ]
            });
        }
    }

    render() {
        return (
            <div>
                <TodoHeader/>
                <TodoForm addTodo={this.addTodo}/>
                <TodoListStates allTodos={this.state} deleteTodo={this.removeTodo} clickTodo={this.onClickTodo}
                                clickEditTodo={this.editTodo}/>
            </div>
        );
    }
}

ReactDom.render(<TodoApp/>, document.getElementById("container"));
