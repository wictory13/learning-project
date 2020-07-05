import * as React from "react";
import * as ReactDom from "react-dom";
import css from "./index.css"

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.value = props.value;
    }

    render() {
        return <label>{this.value}</label>;
    }

}

// let allTodos = []

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            // allTodos.push(this.input.current.value)
            return <Todo value={this.input.current.value}/>
        }

    }

    render() {
        return (
            <div className="todoList">
                <input onKeyPress={this.keyPressed} ref={this.input} placeholder="What needs to be done?" />
            </div>
        )
    }
}



ReactDom.render(<TodoList />, document.getElementById("container"))