import * as React from "react";
import * as ReactDom from "react-dom";
import css from "./index.css"
import EditableField from "./EditableField";


class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.onClickTodo = this.onClickTodo.bind(this);
        this.state = {todos: [], undoneTodos: [], doneTodos: []};
    }

    addTodo(todo) {
        this.state.todos.push({
            value: todo,
            isDone: false
        });
        this.state.undoneTodos.push({
            value: todo,
            isDone: false
        });
        this.setState({todos: this.state.todos, undoneTodos: this.state.undoneTodos})
    }

    onClickTodo(todo) {
        todo.isDone = !todo.isDone;
        if (todo.isDone) {
            this.state.undoneTodos.splice(this.state.undoneTodos.indexOf(todo), 1);
            this.state.doneTodos.push(todo);
        } else {
            this.state.doneTodos.splice(this.state.doneTodos.indexOf(todo), 1);
            this.state.undoneTodos.push(todo);
        }
        this.setState({undoneTodos: this.state.undoneTodos, doneTodos: this.state.doneTodos});
    }

    editTodo(todo, newValue) {
        this.state.todos[this.state.todos.indexOf(todo)].value = newValue;
        if (todo.isDone) {
            this.state.doneTodos[this.state.doneTodos.indexOf(todo)].value = newValue;
        } else {
            this.state.undoneTodos[this.state.undoneTodos.indexOf(todo)].value = newValue;
        }
        this.setState({todos: this.state.todos, undoneTodos: this.state.undoneTodos, doneTodos: this.state.doneTodos});
    }

    removeTodo(todo) {
        this.state.todos.splice(this.state.todos.indexOf(todo), 1);
        if (todo.isDone) {
            this.state.doneTodos.splice(this.state.doneTodos.indexOf(todo), 1);
        } else {
            this.state.undoneTodos.splice(this.state.undoneTodos.indexOf(todo), 1);
        }
        this.setState({todos: this.state.todos, undoneTodos: this.state.undoneTodos, doneTodos: this.state.doneTodos});
    }

    render() {
        return (
            <div>
                <TodoHeader />
                <TodoForm addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} deleteTodo={this.removeTodo} clickTodo={this.onClickTodo} />
            </div>
        );
    }
}

class TodoHeader extends React.Component {
    render() {
        return <h1>todos</h1>;
    }
}

class TodoList extends React.Component {
    render() {
         let todos = this.props.todos.map((todo, index) => {
             return (<Todo todo={todo} key={index} deleteTodo={this.props.deleteTodo} clickTodo={this.props.clickTodo}/>)
         });
         return <ul>{todos}</ul>
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.clickTodo = this.clickTodo.bind(this);
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.todo);
    }

    clickTodo() {
        this.props.clickTodo(this.props.todo);
    }

    doubleClickEdit() {
        console.log(this.props)
    }

    render() {
        return (
        <li style={{ listStyleType: "none" }}>
           <span onClick={this.clickTodo}>&#9711; </span>
            <EditableField value={this.props.todo.value} />
            <button onClick={this.deleteTodo}>x</button>
        </li>);
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
            this.input.current.value = "";
        }
    }

    render () {
        return (
            <input onKeyPress={this.keyPressed} ref={this.input} placeholder="What needs to be done?"/>
        );
    }
}

ReactDom.render(<TodoApp />, document.getElementById("container"));
