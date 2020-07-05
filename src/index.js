import * as React from "react";
import * as ReactDom from "react-dom";
import css from "./index.css"

let todosList = [];

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {todos: todosList};
    }

    addTodo(todo) {
        todosList.push({
            value: todo,
            done: false
        });
        this.setState({todos: todosList});
    }

    removeTodo(todoIndex) {
        todosList.splice(todoIndex, 1);
        this.setState({todos: todosList});
    }

    render() {
        return (
            <div>
                <TodoHeader />
                <TodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

class TodoHeader extends React.Component {
    render () {
        return <h1>todos</h1>;
    }
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            let newTodo = this.input.current.value;
            if (newTodo) {
                this.props.addTodo(newTodo);
            }
        }
    }

    render () {
        return (
            <input onKeyPress={this.keyPressed} ref={this.input} placeholder="What needs to be done?"/>
        );
    }
}

ReactDom.render(<TodoApp />, document.getElementById("container"));
